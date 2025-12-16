import { AppSidebar } from "@/components/app-sidebar";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpIcon } from "lucide-react";


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
           
          </div>
        </header>

        <div className="py-40 max-w-7xl px-20 flex flex-col items-center">
          <Label
            htmlFor="message"
            className="text-2xl font-bold text-center mb-4"
>
            How can I help You?
            <span className="block text-sm font-normal mt-1">I am here to help you.</span>
          </Label>
          </Label>

          {/* Wrapper for textarea + button */}
          <div className="relative w-full max-w-xl">
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="w-full pr-12 pb-12"
            />

            <Button
              type="submit"
              className="absolute top-4 right-3 bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full"
              size="sm"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
