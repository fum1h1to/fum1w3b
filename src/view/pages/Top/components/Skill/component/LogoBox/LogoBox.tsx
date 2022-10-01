import base_styles from 'common/css/base.module.scss';
import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './style.module.scss';

const LogoBox = (props: {
  name: string;
  imgsrc: string;
  useModal: boolean;
}) => {
  const { windowDimensions } = useGlobalStateContext();
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const openModal = () => {
    if (props.useModal) { 
      setIsModalOpen(true)
    };
  }

  return (
    <>
      <div className={styles.logoBox} onClick={openModal}>
        <div className={`${styles.logoBox__inner} ${props.useModal ? styles.click : ''}`}>
          <div className={styles.logoBox__img}>
            <img src={props.imgsrc} alt=""/>
          </div>
          { windowDimensions.width > 800 ? <div className={styles.logoBox__name}>{props.name}</div> : <></>}
        </div>
        { windowDimensions.width <= 800 ? <div className={styles.logoBox__name}>{props.name}</div> : <></>}
      </div>
      {
        props.useModal ?
        <Modal
          isOpen={isModalOpen}
        />
        :
        <></>
      }
    </>
  );
}

export default LogoBox;