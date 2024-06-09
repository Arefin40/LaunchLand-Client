import Modal from "@components/Modal";

const ConfirmationModal = ({
   onConfirmDelete,
   onCancel,
   description = "This action is permanent and cannot be undone.",
   confirmButnLabel = "Confirm Delete",
   cancelButtonLabel = "Don't Delete",
}) => {
   return (
      <Modal.Dialog>
         <Modal.Header title="Are you sure?" description={description} />
         <Modal.ButtonGroup>
            <Modal.SubmitButton onClick={onConfirmDelete}>{confirmButnLabel}</Modal.SubmitButton>
            <Modal.CancelButton onClick={onCancel}>{cancelButtonLabel}</Modal.CancelButton>
         </Modal.ButtonGroup>
      </Modal.Dialog>
   );
};
export default ConfirmationModal;
