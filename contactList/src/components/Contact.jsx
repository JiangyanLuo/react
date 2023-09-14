function Contact ({imgSrc="../baseline_perm_identity_black_48dp.png", name, telNumber,email}){
    return(
    <figure className="w-56 flex flex-col items-center bg-gray-50 rounded-xl p-8 space-y-2 shadow-xl">
      <div>
        <img
          className="w-28 h-28 rounded-full"
          src="../baseline_perm_identity_black_48dp.png"
        />
      </div>
      <h1 className="text-lg font-semibold">Leroy Brown</h1>
      <p className="font-light text-gray-500">(123)-456-7890</p>
      <p className="font-light text-gray-500">LB35@yahoo.com</p>
    </figure>
    );
  }

  export default Contact;