import { useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './TabBar.module.css'

export default function TabBar() {
  const location = useLocation()
  const [selectedTab, setSelectedTab] = useState('All')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const tabsRef = useRef({})
  
  // Define tab configurations based on routes
  const getTabs = () => {
    switch (location.pathname) {
      case '/':
        return ['Latest', 'Polls']
      case '/mod-queue':
        return ['All', 'Posts', 'Comments', 'Appeals']
      default:
        return ['Latest']
    }
  }

  useEffect(() => {
    const selectedElement = tabsRef.current[selectedTab]
    if (selectedElement) {
      const { offsetLeft, offsetWidth } = selectedElement
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`
      })
    }
  }, [selectedTab])

  return (
    <div className={styles.tabBar}>
      <div 
        className={styles.indicator} 
        style={indicatorStyle}
      />
      {getTabs().map((tab) => (
        <span 
          ref={el => tabsRef.current[tab] = el}
          key={tab}
          className={styles.tabBarItem}
          aria-selected={tab === selectedTab}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </span>
      ))}
    </div>
  )
} 