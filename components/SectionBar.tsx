import styles from '../src/app/page.module.css'

export default function SectionBar() {
  return (
    <div>
      <nav className={styles.navcontainer}>
        <ul>
          <li>Profile</li>
          <li>Stories</li>
          <li>Groups</li>
          <li>Search</li>
        </ul>

      </nav>
    </div>
  )
}
