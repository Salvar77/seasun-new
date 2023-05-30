import classes from './Nav.module.scss';
import Image from 'next/image';
import logo from '@/assets/images/seasunlogo.png';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SelectLanguage from './SelectLanguage';

function Nav_mobile({ lng, t}) {
	const [isActive, setIsActive] = useState(false);
	const toggleNav = () => {
		setIsActive(!isActive);
	};
	return (
		<>
			<nav className={classes.nav_container}>
				<div className={classes.nav_mobile__logo}>
					<Link href={`/`}>
						<Image src={logo}  alt='midform logo'className={classes.nav_logoimg} />
					</Link>
				</div>
				<Hamburger
					onClick={toggleNav}
					isActive={isActive}
					ariaLabel='open nav'
				/>
			</nav>
			<AnimatePresence>
				{isActive && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className={classes.nav_mobile}
					>
						<ul className={classes.nav_mobile__links}>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/`}>Strona główna</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/holiday_cottages`} >Domki</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/breakfasts`}>Śniadania</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/special_offert`}>Oferta specjalna</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/gallery`}>Galeria</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/regulations`}>Regulamin</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/contact`}>Kontakt</Link>
							</li>
							<li className={classes.nav_mobile__link} onClick={toggleNav}>
								<Link href={`/bookings`}>Rezerwacja</Link>
							</li>


						</ul>
						<SelectLanguage  lng={lng} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Nav_mobile;