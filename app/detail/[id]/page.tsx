import { getJobs } from "@/actions/getJobs";
import { JobPosting } from "@/types";
import HeaderDetail from "./_components/detail-header";
import DetailContent from "@/app/components/detail-content";

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const parseid = parseInt(id);
  const jobs = await getJobs({});
  const currentJob = jobs.find((job: JobPosting) => job.id === parseid);

  return (
    <>
      <div className="relative">
        <HeaderDetail data={currentJob} />
      </div>
      <DetailContent data={currentJob} />
    </>
  );
}
