import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
export default function DeleteModal({ isOpen, onClose, onDelete }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogPanel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <DialogTitle className="text-lg font-semibold">
            Confirm Deletion
          </DialogTitle>
          <p className="text-sm text-gray-600">
            Are you sure you want to delete this task?
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              className="px-3 py-1 bg-gray-400 text-white rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
