import Location from "@/components/Charts/location";
import Marketing from "@/components/Charts/marketing";
import Reports from "@/components/Charts/reports";
import Traffic from "@/components/Charts/traffic";
import Users from "@/components/Charts/users";
import DataCards from "@/components/Reusables/DataCards";

export default function Home() {
  return (
    <div className="space-y-4 px-4 lg:px-none">
      <div>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <DataCards
            title="Requests"
            otherStyles="bg-[#E3F5FF]"
            value="7,265"
            perc="+11.02%"
            up
          />
          <DataCards
            title="Kyc"
            otherStyles="bg-[#E5ECF6]"
            value="3,671"
            perc="-0.03%"
          />
          <DataCards
            title="Tasks"
            otherStyles="bg-[#E3F5FF]"
            value="156"
            perc="+15.03%"
            up
          />
          <DataCards
            title="Customers"
            otherStyles="bg-[#E5ECF6]"
            value="2,318"
            perc="+6.08%"
            up
          />
        </section>
      </div>
      <div className="grid grid-col-1 md:grid-cols-4 gap-4">
        <section className="md:col-span-3">
          <Users />
        </section>
        <section className="md:col-span-1">
          <Traffic />
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Reports />
        </div>
        <div>
          <Location />
        </div>
      </div>
      <div>
        <Marketing />
      </div>
    </div>
  );
}
