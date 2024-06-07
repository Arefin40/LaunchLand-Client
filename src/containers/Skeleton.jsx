const Skeleton = () => {
   return (
      <section className="grid lg:grid-cols-[16rem,1fr] content-start lg:content-stretch min-h-screen lg:divide-x">
         <div className="hidden lg:block w-96 h-96 fixed top-0 right-0 rounded-full bg-orange-100 -z-10 blur-3xl bg-opacity-10 pointer-events-none" />
         <div className="hidden lg:block w-96 h-96 fixed bottom-0 left-0 translate-x-1/4 translate-y-1/4 rounded-full bg-yellow-100 -z-10 pointer-events-none blur-3xl bg-opacity-10" />
         <div className="fixed top-0 inset-x-0 h-32 bg-gradient-to-b from-orange-200/10 to-orange-50/10"></div>

         <div className="h-full p-5 lg:p-8 flex flex-col gap-y-6 lg:gap-y-16 content-start">
            <div className="h-12 bg-primary-50 animate-pulse rounded" />

            <div className="hidden lg:block space-y-4">
               {Array.from({ length: 4 }).map((_, i) => (
                  <div
                     key={i}
                     className={`${
                        i % 2 == 0 ? "w-full" : "w-3/4"
                     } h-8 bg-primary-50 animate-pulse rounded-sm`}
                  />
               ))}
            </div>

            <div className="mt-auto h-10 bg-primary-50 animate-pulse rounded" />
         </div>

         <div className="h-full p-5 lg:p-8 grid gap-y-6 lg:gap-y-16 content-start">
            <div className="max-w-sm h-12 bg-primary-50 animate-pulse rounded" />

            <div className="grid grid-cols-products gap-8">
               {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-40 bg-primary-50 animate-pulse rounded" />
               ))}
            </div>
         </div>
      </section>
   );
};
export default Skeleton;
