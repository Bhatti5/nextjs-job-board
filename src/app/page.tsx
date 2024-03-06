import prisma from "@/lib/prisma";
import JobListItem from "@/components/ui/JobListItem";

export default async function Home() {
  const jobs =await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" }
    }
  );
  
  return (
   <main>
    {jobs.map((job) => (
      <JobListItem job={job} key={job.id} />))}
    </main>
  )
}
