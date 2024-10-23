import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Button } from "@/components/ui/button";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
    
   
    <DashboardCard title="Posts" count={33} icon={<Newspaper className="text-slate-500" size={72}/>}/>
    <DashboardCard title="Users" count={750} icon={<User className="text-slate-500" size={72}/>}/>
    <DashboardCard title="Categories" count={12} icon={<Folder className="text-slate-500" size={72}/>}/>
    <DashboardCard title="Comments" count={113} icon={<MessageCircle className="text-slate-500" size={72}/>}/>
  
    <Button variant="destructive" size="lg"> Click Me</Button>
   </div>
   <AnalyticsChart />

   <PostsTable title="Latest Posts" limit={5} />
   </>
  );
}
