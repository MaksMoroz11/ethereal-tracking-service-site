import React from 'react'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<h3 className={styles.title}>ethereal</h3>
				<ul className={styles.navbarNav}>
					<li className={styles.navItem}>
						<a href="#" className={styles.navLink}>Войти</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}