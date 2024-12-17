"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { AppBar, Toolbar, Box, Fab, Zoom, IconButton, Typography } from "@mui/material"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ChatIcon from '@mui/icons-material/Chat'
import { useEffect, useState } from "react"
import { useNavigation } from '@/components/providers/navigation-provider';

const navItems = [
  { name: "About", path: "/about" },
  // { name: "Docs", path: "/docs" },
  { name: "Blogs", path: "/blogs" },
]

const MotionBox = motion(Box)

function ScrollProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
      setShowButton(winScroll > 300);
    };

    if (pathname.startsWith('/blogs/') && pathname !== '/blogs') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  // Only render on blog post pages
  if (!pathname.startsWith('/blogs/') || pathname === '/blogs') {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#E2E8F0'
        }}
      >
        <Box
          sx={{
            height: '100%',
            backgroundColor: '#6366F1',
            width: `${progress}%`,
            transition: 'width 0.2s ease-in-out'
          }}
        />
      </Box>
      <Zoom in={showButton}>
        <Fab
          color="primary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: '#6366F1',
            '&:hover': {
              backgroundColor: '#4F46E5'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
}

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const { handleLogout } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't show navigation in chat room and admin pages
  if (pathname === '/chat/room' || pathname === '/admin' || pathname.startsWith('/admin/dashboard')) {
    return null;
  }

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 2 : 0}
      sx={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
        border: 'none',
        margin: 0,
        padding: 0,
        height: '70px',
      }}
    >
      <Toolbar 
        disableGutters 
        sx={{ 
          height: '100%',
          justifyContent: 'space-between',
          margin: 0,
          padding: '0 16px',
          maxWidth: 'xl',
          width: '100%',
          mx: 'auto'
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ChatBubbleOutlineIcon sx={{ color: '#6366F1', fontSize: '2rem' }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#2D3748',
              fontSize: '1.5rem',
              fontFamily: "'Inter', sans-serif",
              cursor: 'default'
            }}
          >
            ChitChat
          </Typography>
        </Box>

        {/* Navigation Links - Centered */}
        <Box sx={{ display: 'flex', gap: 4, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link key={item.path} href={item.path} passHref style={{ textDecoration: 'none' }}>
                <MotionBox
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '9999px',
                    color: isActive ? '#6366F1' : '#64748B',
                    backgroundColor: isActive ? '#EEF2FF' : 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    fontFamily: "'Inter', sans-serif",
                    '&:hover': {
                      backgroundColor: isActive ? '#EEF2FF' : '#F8FAFC',
                      color: isActive ? '#6366F1' : '#2D3748'
                    }
                  }}
                >
                  {item.name}
                </MotionBox>
              </Link>
            )
          })}
        </Box>

        {/* Chat Button */}
        <Link href="/chat" passHref style={{ textDecoration: 'none', marginLeft: '16px' }}>
          <MotionBox
            component="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 3,
              py: 1.5,
              border: 'none',
              borderRadius: '9999px',
              backgroundColor: '#6366F1',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#4F46E5'
              }
            }}
          >
            <ChatIcon sx={{ fontSize: '1.25rem' }} />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: '0.875rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Start Chat
            </Typography>
          </MotionBox>
        </Link>
      </Toolbar>
      <ScrollProgress />
    </AppBar>
  )
}
