import { getCustomers } from '@/app/lib/action';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function CustomerPage() {
  const customers = await getCustomers();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>

      <div className="mt-8 flex h-full flex-col bg-white px-4 py-8">
        {customers.map((customer) => {
          return (
            <div
              key={customer.id}
              className=" mb-4 flex w-full  items-center rounded-md bg-white p-2 hover:bg-sky-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className=" flex items-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src={customer.image_url}
                        className="rounded-full"
                        alt={`${customer.name}'s profile picture`}
                        width={28}
                        height={28}
                      />
                      <p>{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
