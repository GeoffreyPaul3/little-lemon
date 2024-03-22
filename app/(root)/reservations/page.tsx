import BookingForm from "@/components/shared/BookingForm"


const Reservations = () => {


  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Reserve A Table</h3>
      </section>

      <div className="wrapper my-8">
        <BookingForm />
      </div>
    </>
  )
}

export default Reservations