import { getJobs } from "@/actions/getJobs";
import { JobPosting } from "@/types";
import HeaderDetail from "./_components/detail-header";
import DetailContent from "./_components/detail-content";
import DetailFooter from "./_components/detail-footer";

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
      <DetailFooter data={currentJob} />
    </>
  );
}
