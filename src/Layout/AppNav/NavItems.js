export const MainNav = [
  {
    icon: "pe-7s-user",
    label: "Profile",
    to: "#/a/me"
  },
  {
    icon: "pe-7s-rocket",
    label: "Rooms",
    content: [
      {
        label: "Create Room",
        to: "#/a/rooms/create"
      },
      {
        label: "Join Room",
        to: "#/a/rooms/join"
      }
    ]
  },
  {
    icon: "pe-7s-users",
    label: "Members",
    to: "#/a/members"
  },
  {
    icon: "pe-7s-mail",
    label: "Contact Us",
    to: "#/a/contact"
  },
  {
    icon: "pe-7s-config",
    label: "Settings",
    to: "#/a/settings"
  },
  {
    icon: "pe-7s-close-circle",
    label: "Logout",
    to: "#/user/login"
  },
]