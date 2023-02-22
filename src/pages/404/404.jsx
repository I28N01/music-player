import NFCSS from './404.module.scss';
import image from '../../img/crying.png'
import { NavLink } from 'react-router-dom';

export const NotFound = function () {
    return (
        <section className={NFCSS.NotFound}>
        <div className={NFCSS.block}>
            <div className={NFCSS.title}>404</div>
            <div className={NFCSS.textBox}>
                <div className={NFCSS.subTitle}>Страница не найдена</div>
                <img src={image} alt={NFCSS.Crying} />
            </div>
            <div className={NFCSS.text}>Возможно, она была удалена или перенесена на другой адрес</div>
            <NavLink to="/"><div className={NFCSS.Button}>Вернуться на главную</div></ NavLink>
        </div>
        </section>
    )
  }

  export default NotFound;