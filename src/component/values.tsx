import { valueData } from "../data/valueData"

const Values = () => {
  return (
    <div className="md:px-[160px] px-6 my-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      {valueData.map((value, idx) => (
        <div key={idx} className="mb-4">
          <img
            src={value.image}
            alt={value.title}
            className="w-12 h-12 mr-4 mb-2"
          />
          <div>
            <h2 className="Poppins mb-2 text-h7">{value.title}</h2>
            <p className="Poppins text-text6 text-[#6C7275]">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Values
