"use client"
import { Button } from "@/app/components/ui/button/button";
import AnimatedLink from "@/app/components/ui/link/Link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import styles from "./Header.module.scss";

const Header = () => {
  const [scrollDir, setScrollDir] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollDir])

  return (
    <header className={`${styles.header} ${scrollDir && styles.header_hide}`}>
      <div className={styles.header__left_side}>
        <AnimatedLink href="/">
          Portfolio
        </AnimatedLink>
      </div>
      <div className={cn(styles.header__right_side, "buttons")}>
        <AnimatedLink href="menu">
          <Button size="flexible">
            Hire me
          </Button>
        </AnimatedLink>
        <Button size="flexible">
          Login
        </Button>
        <AnimatedLink href="/menu">
          <Button size="flexible">
            <BiMenu />
          </Button>
        </AnimatedLink>
      </div>
    </header>
  )
}

export default Header
