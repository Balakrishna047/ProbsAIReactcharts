import React from 'react';
import { DataPoint } from '../types';

interface ModalProps {
  dataPoint: DataPoint;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ dataPoint, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Timestamp: {dataPoint.timestamp}</p>
        <p>Value: {dataPoint.value}</p>
      </div>
    </div>
  );
};

export default Modal;
