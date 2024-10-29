import styles from "./Navigation.module.css"
function Navigation() {
  return (
  <nav className={`${styles.navgation} container`}>
    <div className="logo">
        <img src='/images/Frame21.png' alt='LOGO'/>
    </div>
    <ul>
        <li>Home</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
  </nav>
  )
}

export default Navigation