export default function DriverCard({ driver }: { driver: any }) {
  return (
    <div className="flex flex-row w-[100%] p-8 bg-slate-800 items-center justify-between">
      <div className="flex items-center gap-6">
        <p className="text-3xl font-semibold text-slate-500">
          {driver.position}
        </p>
        <div className="flex flex-col justify-between gap-0.5">
          <p className="text-xl font-semibold text-gray-200">{driver.number}</p>
          <p className="text-xl font-semibold text-white">
            {driver.Driver.code}
          </p>
          <p className="text-lg text-gray-200">
            {driver.Driver.givenName} {driver.Driver.familyName}
          </p>
        </div>
      </div>

      <div className="text-xl text-gray-200">{driver.Constructor.name}</div>
    </div>
  );
}
