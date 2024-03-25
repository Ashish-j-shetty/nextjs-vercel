import { lusitana } from '@/app/ui/fonts';
import { CustomerRowSkeleton } from '@/app/ui/skeletons';

export default function LoadingCustomer() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>

      <div className="mt-8 flex h-full flex-col bg-white ">
        <div className=" flex w-full items-center  rounded-md bg-white hover:bg-sky-100">
          <div className="flex w-full flex-col ">
            <CustomerRowSkeleton />
            <CustomerRowSkeleton />
            <CustomerRowSkeleton />
            <CustomerRowSkeleton />
            <CustomerRowSkeleton />
            <CustomerRowSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
