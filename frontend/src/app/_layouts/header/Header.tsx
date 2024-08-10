"use client"
import { Button, buttonVariants } from "@/app/_components/ui/button/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/_components/ui/dropdown-menu/DropdownMenu"
import AnimatedLink from "@/app/_components/ui/link/Link"
import { Routes } from "@/configs/Routes.config"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { BiMenu } from "react-icons/bi"
import styles from "./Header.module.scss"

const Header = () => {
  const [scrollDir, setScrollDir] = useState(false)

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
    }

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
        <AnimatedLink href={Routes.hireMe} className={buttonVariants({ size: "flexible" })}>
          Hire me
        </AnimatedLink>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="flexible">
              <BiMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <AnimatedLink href={Routes.portfolio}>
              <DropdownMenuItem>
                Portfolio
              </DropdownMenuItem>
            </AnimatedLink>
            <AnimatedLink href={Routes.hireMe}>
              <DropdownMenuItem>
                  Hire me
              </DropdownMenuItem>
            </AnimatedLink>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
