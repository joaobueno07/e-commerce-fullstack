"use client";

import LogoStore from "../LogoStore/LogoStore";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { sidebarMenu } from "./utils/sidebarMenu";

export default function ContainerSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={` w-full flex justify-center mt-4 ${state === "collapsed" ? "p-0" : "p-2"}`}
        >
          <LogoStore />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((menu, index) => {
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      render={<a href={menu.url} />}
                      tooltip={menu.title}
                    >
                      <menu.icon />
                      <span>{menu.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
