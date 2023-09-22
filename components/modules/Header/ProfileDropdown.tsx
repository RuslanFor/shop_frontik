import ProfileSvg from "@/components/elements/ProfileSvg/ProfileSvg";
import { $mode } from "@/context/mode";
import { IWrappedComponentProps } from "@/types/common";
import { useStore } from "effector-react";
import { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LogoutSvg from "@/components/elements/LogoutSvg/LogoutSvg";
import { withClickOutside } from "@/utils/withClickOutside";
import styles from '@/styles/profileDropdown/index.module.scss';
import { $user } from "@/context/user";
import { logoutFx } from "@/app/api/auth";
import { useRouter } from "next/router";

const ProfileDropdown = forwardRef<HTMLDivElement, IWrappedComponentProps>(({open, setOpen}, ref) => {
    const user = useStore($user)
    const mode = useStore($mode)
    const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

    const toggleProfileDropdown = () => setOpen(!open)
    const router = useRouter()
    const handleLogout = async () => {
        await logoutFx('/users/logout')
        router.push('/')
      }
    return(
        <div className={styles.profile} ref={ref}>
            <button className={styles.profile__btn} onClick={toggleProfileDropdown}>
                <span className={styles.profile__span}>
                    <ProfileSvg/>
                </span>
            </button>
            <AnimatePresence>
                {open && <motion.ul 
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0}}
                className={`${styles.profile__dropdown} ${darkModeClass}`}
                style={{ transformOrigin:'right top'}}
                >
                    <li className={styles.profile__dropdown__user}>
                        <span className={`${styles.profile__dropdown__username} ${darkModeClass}`}>{user.username}</span>
                        <span className={`${styles.profile__dropdown__email} ${darkModeClass}`}>{user.email}</span>
                    </li>
                    <li className={styles.profile__dropdown__item}>
                        <button className={styles.profile__dropdown__item__btn} onClick={handleLogout}>
                            <span className={`${styles.profile__dropdown__item__text} ${darkModeClass}`}>Выйти</span>
                            <span className={`${styles.profile__dropdown__item__svg} ${darkModeClass}`}><LogoutSvg/></span>
                        </button>
                    </li>
                    </motion.ul>}
            </AnimatePresence>
        </div>
    )
    }
)

ProfileDropdown.displayName = 'ProfileDropdown'

export default withClickOutside(ProfileDropdown)