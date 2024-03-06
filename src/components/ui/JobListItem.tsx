import { Job } from "@prisma/client";

interface JobListItemProps {
    job: Job;
}
export default function JobListItem({
    job: {
      title,
      companyName,
      type,
      locationType,
      location,
      salary,
      companyLogoUrl,
      createdAt,
    },
  }: JobListItemProps) {
    return(
        <article className="">
            {title}
        </article>
    ) 
  }