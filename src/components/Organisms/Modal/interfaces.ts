export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
