import { useState } from "react";
import { Tooltip, Dropdown, MenuProps, Modal, Input, message } from "antd";
import { TfiMoreAlt } from "react-icons/tfi";
import { TbTrash, TbEdit, TbFolder } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { chatApi } from "@/api/chat.api";

interface ChatData {
    _id: string;
    userId: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}

interface ChatItemProps {
    chat: ChatData;
    onDeleted?: (id: string) => void;
    onRenamed?: (id: string, name: string) => void;
    // onMoved?: (id: string, folderId: string) => void; // Chưa implement
}

const ChatItem = ({ chat, onDeleted, onRenamed }: ChatItemProps) => {
    const navigate = useNavigate();

    // State modal đổi tên
    const [renameModalVisible, setRenameModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [renameValue, setRenameValue] = useState(chat.name);
    const [loading, setLoading] = useState(false);

    // Mở modal đổi tên
    const openRenameModal = () => {
        setRenameValue(chat.name);
        setRenameModalVisible(true);
    };

    // Mở modal xóa
    const openDeleteModal = () => setDeleteModalVisible(true);
    const closeDeleteModal = () => setDeleteModalVisible(false);

    // Xử lý lưu tên mới
    const handleRenameOk = async () => {
        if (!renameValue.trim()) {
            message.error("Tên không được để trống");
            return;
        }
        setLoading(true);
        try {
            await chatApi.renameChat(chat._id, renameValue.trim());
            message.success("Đổi tên thành công");
            onRenamed?.(chat._id, renameValue.trim());
            setRenameModalVisible(false);
        } catch {
            message.error("Đổi tên thất bại");
        } finally {
            setLoading(false);
        }
    };

    // Đóng modal đổi tên
    const handleRenameCancel = () => {
        setRenameModalVisible(false);
    };

    // Xử lý xóa chat
    const handleDeleteConfirm = async () => {
        setLoading(true);
        try {
            await chatApi.deleteChat(chat._id);
            message.success("Đã xóa đoạn chat");
            onDeleted?.(chat._id);
            closeDeleteModal();
        } catch {
            message.error("Xóa thất bại");
        } finally {
            setLoading(false);
        }
    };

    // Menu dropdown theo chuẩn antd v5
    const menu: MenuProps = {
        items: [
            {
                key: "rename",
                label: "Đổi tên",
                icon: <TbEdit size={16} />,
                onClick: (e) => {
                    e.domEvent.stopPropagation(); // Ngăn dropdown đóng khi click
                    openRenameModal();
                },
            },
            {
                key: "move",
                label: "Chuyển vào thư mục (chưa có)",
                icon: <TbFolder size={16} />,
                disabled: true,
            },
            {
                key: "delete",
                label: "Xóa đoạn chat",
                icon: <TbTrash size={16} />,
                onClick: (e) => {
                    e.domEvent.stopPropagation();
                    openDeleteModal();
                },
            },
        ],
    };

    return (
        <>
            <div
                className="flex justify-between items-center cursor-pointer group hover:bg-gray-100 rounded px-2 py-1"
                onClick={() => navigate(`/chat/${chat._id}`)}
                title={chat.name}
            >
                <div className="truncate">{chat.name}</div>
                <Dropdown menu={menu} trigger={["click"]} placement="bottomRight">
                    <div
                        className="invisible group-hover:visible p-1 cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="menu"
                    >
                        <TfiMoreAlt size={18} />
                    </div>
                </Dropdown>
            </div>

            <Modal
                title="Đổi tên đoạn chat"
                open={renameModalVisible}
                onOk={handleRenameOk}
                onCancel={handleRenameCancel}
                confirmLoading={loading}
                okText="Lưu"
                cancelText="Hủy"
                afterClose={() => setRenameValue(chat.name)}
            >
                <Input
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    maxLength={50}
                    autoFocus
                    onPressEnter={handleRenameOk}
                    placeholder="Nhập tên đoạn chat"
                />
            </Modal>

            {/* Modal xóa chat */}
            <Modal
                title={`Xóa đoạn chat "${chat.name}"?`}
                open={deleteModalVisible}
                onOk={handleDeleteConfirm}
                onCancel={closeDeleteModal}
                okText="Xóa"
                okType="danger"
                cancelText="Hủy"
                confirmLoading={loading}
            />
        </>
    );
};

export default ChatItem;
