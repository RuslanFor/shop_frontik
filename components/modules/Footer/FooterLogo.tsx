import styles from '@/styles/footer/index.module.scss'
import Link from 'next/link'

const FooterLogo = () => (
    <div className={styles.footer__top__item}>
        <Link href='/dashboard' passHref legacyBehavior>
            <a className={styles.footer__top__logo}>
                <img src="/img/logo.svg" alt="logo" />
                <span className={styles.footer__top__item__logo__text}>Кросовки</span>
            </a>
        </Link>
    </div>
)

export default FooterLogo