"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Flex, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaPinterest, FaSearch, FaVimeo } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCart, IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Pages",
      link: "/pages",
      subItems: [
        { name: "Shop", link: "/pages/shop" },
        { name: "Contact", link: "/pages/contact" },
        { name: "Author", link: "/pages/author" },
        { name: "Gallery", link: "/pages/gallery" },
        { name: "Price Table", link: "/pages/price-table" },
        { name: "Maintenance", link: "/pages/maintenance" },
        { name: "Coming Soon", link: "/pages/coming-soon" },
        { name: "404 Page", link: "/pages/404" },
      ],
    },
    {
      name: "Category",
      link: "/category",
      subItems: [
        { name: "Photography", link: "/category/photography" },
        { name: "Travel", link: "/category/travel" },
        { name: "Fashion", link: "/category/fashion" },
        { name: "Food", link: "/category/food" },
        { name: "Technology", link: "/category/technology" },
      ],
    },
  ];

  const rightMenuItems = [
    {
      name: "Layout",
      link: "/layout",
      subItems: [
        {
          name: "Gutenberg Single Post",
          link: "/layout/gutenberg-single-post",
        },
        {
          name: "WP Editor Single Post",
          link: "/layout/wp-editor-single-post",
        },
        { name: "Blog Full", link: "/layout/blog-full" },
        { name: "Blog Grid Overlay", link: "/layout/blog-grid-overlay" },
        { name: "Blog Columns", link: "/layout/blog-columns" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Features", link: "/features" },
  ];

  const pathname = usePathname();
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [underlineLeft, setUnderlineLeft] = useState<number>(0);
  const [submenuVisible, setSubmenuVisible] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Update underline position based on hovered item
  const updateUnderline = (index: number) => {
    if (menuRefs.current[index]) {
      const { offsetLeft, offsetWidth } = menuRefs.current[index]!;
      setUnderlineLeft(offsetLeft + offsetWidth / 2 - 15); // Adjust the underline position
    }
  };

  // Initially, set the underline position based on the current page
  useEffect(() => {
    const allMenuItems = [...menuItems, ...rightMenuItems];

    const index = allMenuItems.findIndex((item) => {
      if (pathname === item.link) return true;
      if (item.subItems) {
        return item.subItems.some((sub) => pathname.startsWith(sub.link));
      }
      return false;
    });

    if (index !== -1 && menuRefs.current[index]) {
      updateUnderline(index); // Update underline when page loads
    }
  }, [pathname]);

  return (
    <Box color="black" minH="40" w="90%" mx="auto" position="relative">
      <Flex align="center" justify="space-between" mt="10">
        <Flex gap="10" display={{ base: "none", lg: "flex" }}>
          <FaFacebook className="hover:text-red-500 cursor-pointer" />
          <FaPinterest className="hover:text-red-500 cursor-pointer" />
          <FaXTwitter className="hover:text-red-500 cursor-pointer" />
          <FaVimeo className="hover:text-red-500 cursor-pointer" />
        </Flex>
        {/* logo */}
        <Box position="relative" display={{ base: "none", lg: "flex" }}>
          <Box minW="auto" h="100px" rounded="full" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1729452120375-0a8292664b9b?q=80&w=1374&auto=format&fit=crop"
              alt="Logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </Box>
          <Box
            minW="70px"
            h="70px"
            rounded="full"
            overflow="hidden"
            position="absolute"
            top="30px"
            left="80px"
          >
            <Image
              src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Logo"
              width={70}
              height={70}
              className="object-cover"
            />
          </Box>
        </Box>
        {/*  */}
        {/*  */}
        <Text
          fontSize={["24px", "32px", "40px"]}
          fontWeight="bold"
          display={{ base: "block", lg: "none" }} // Visible on small screens, hidden on lg+
        >
          Thinking{" "}
          <Text as="span" fontSize={["24px", "32px", "40px"]} color="orange">
            Loud
          </Text>
        </Text>
        {/*  */}
        {/*  */}
        <Flex gap="10">
          <CiMenuBurger onClick={() => setIsOpen(!isOpen)} />
          <FaSearch />
          <IoIosCart />
        </Flex>
      </Flex>
      {/*  */}
      <Box
        display={{ base: "none", lg: "flex" }}
        position="relative"
        justifyContent="center"
        alignItems="center"
        gap="10"
        color="gray.600"
        fontSize="lg"
        fontWeight="medium"
        mt="5"
      >
        {/* Left Menu */}
        {menuItems.map((item, index) => (
          <Box
            key={item.name}
            position="relative"
            cursor="pointer"
            _hover={{ color: "black" }}
            transition="color 0.3s"
            ref={(el) => (menuRefs.current[index] = el)}
            onMouseEnter={() => {
              updateUnderline(index); // Update underline on hover
              setSubmenuVisible(index); // Show submenu
            }}
            onMouseLeave={() => setSubmenuVisible(null)} // Hide submenu
          >
            <Link href={item.link}>{item.name}</Link>

            {/* Submenu */}
            {item.subItems && submenuVisible === index && (
              <Box
                position="absolute"
                top="100%"
                left="0"
                bg="white"
                boxShadow="md"
                rounded="md"
                width="200px"
                p="2"
                zIndex="10"
              >
                {item.subItems.map((subItem) => (
                  <Box key={subItem.name} p="2" _hover={{ bg: "gray.100" }}>
                    <Link href={subItem.link}>{subItem.name}</Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}

        {/* Logo Text */}
        <Text fontSize="40px" fontWeight="bold">
          Thinking{" "}
          <span style={{ fontSize: "40px", color: "orange" }}>Loud</span>
        </Text>

        {/* Right Menu */}
        {rightMenuItems.map((item, index) => (
          <Box
            key={item.name}
            position="relative"
            cursor="pointer"
            _hover={{ color: "black" }}
            transition="color 0.3s"
            ref={(el) => (menuRefs.current[index + menuItems.length] = el)}
            onMouseEnter={() => {
              updateUnderline(index + menuItems.length); // Update underline for right menu items
              setSubmenuVisible(index + menuItems.length); // Show submenu
            }}
            onMouseLeave={() => setSubmenuVisible(null)} // Hide submenu
          >
            <Link href={item.link}>{item.name}</Link>

            {/* Submenu */}
            {item.subItems && submenuVisible === index + menuItems.length && (
              <Box
                position="absolute"
                top="100%"
                left="0"
                bg="white"
                boxShadow="md"
                rounded="md"
                width="200px"
                p="2"
                zIndex="10"
              >
                {item.subItems.map((subItem) => (
                  <Box key={subItem.name} p="2" _hover={{ bg: "gray.100" }}>
                    <Link href={subItem.link}>{subItem.name}</Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}

        {/* Moving Underline */}
        <Box
          position="absolute"
          bottom="-3px"
          h="2px"
          bg="orange.500"
          transition="all 0.3s ease-in-out"
          width="30px"
          left={`${underlineLeft}px`}
          transform="translateX(-50%)"
        />
      </Box>
      <Box
        className={`fixed top-0 left-0 w-full bg-black/90 backdrop-blur-lg 
  border border-white/20 flex flex-col items-center transition-all duration-300
  ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden"}`}
      >
        {/* Close Button (Positioned at the Top) */}
        <Button marginBottom="30px" bg="transparent"
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white  text-3xl hover:text-orange-400 transition
         
          "
        >
          <IoMdClose />
        </Button>

        {/* Navigation Menu */}
        <nav className="text-xl text-white gap-12 font-bold text-center flex flex-col items-center w-full px-6 mt-16">
          {["Home", "Pages", "Category", "Layout", "About", "Features"].map(
            (item, index, arr) => {
              const route = `/${item.toLowerCase()}`;

              return (
                <div
                  key={item}
                  className="flex flex-col items-center w-48 pb-3 relative"
                >
                  <Link
                    href={route}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center hover:text-orange-400 transition"
                  >
                    {item} <span className="text-sm ml-2">▼</span>
                  </Link>

                  {index !== arr.length - 1 && (
                    <div className="w-full border-t border-white/30 mt-3"></div>
                  )}
                </div>
              );
            }
          )}
        </nav>
      </Box>
    </Box>
  );
};
