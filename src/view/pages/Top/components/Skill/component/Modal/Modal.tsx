import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';

import ReactModal from 'react-modal';

const Modal = (props: {
  isOpen: boolean;
}) => {
  

  return (
    <ReactModal
      isOpen={props.isOpen}
    >

    </ReactModal>
  );
}

export default Modal;