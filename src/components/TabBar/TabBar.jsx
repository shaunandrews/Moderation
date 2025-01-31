import { useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './TabBar.module.css'

export default function TabBar({ tabs: propTabs }) {
  const location = useLocation()
  const tabsRef = useRef({})
  
  // Define tab configurations based on routes if no tabs provided
  const getTabs = () => {
    if (propTabs) return propTabs
    
    switch (location.pathname) {
      case '/':
        return ['Latest', 'Polls']
      case '/mod-queue':
        return ['All', 'Posts', 'Comments', 'Appeals']
      default:
        return ['Latest']
    }
  }

  // Initialize selected tab based on current route or provided tabs
  const [selectedTab, setSelectedTab] = useState(() => {
    const tabs = getTabs()
    return tabs[0] // Default to first tab
  })

  const [indicatorStyle, setIndicatorStyle] = useState({})

  // Update selected tab when route changes or tabs prop changes
  useEffect(() => {
    const tabs = getTabs()
    setSelectedTab(tabs[0])
  }, [location.pathname, propTabs])

  // Update indicator position
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