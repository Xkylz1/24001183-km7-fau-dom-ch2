class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    const formattedPrice = new Intl.NumberFormat("id-ID").format(
      this.rentPerDay
    );
    return `

        <div class="card px-3 px-sm-4 py-4">
            <img src="${this.image}" class="card-img-top w-auto">
            <div class="card-body px-0">
                <h5 class="card-title fs-6">${this.manufacture}/${this.model}</h5>
                <h5 class="card-title fs-5 fw-bold">Rp ${formattedPrice} / hari</h5>
                <p class="cars__p d-sm-block d-none">${this.description}</p>
                <div class="row">
                    <div class="px-0 col-auto ">
                        <img src="icons/fi_users.svg" width="20px" alt="" srcset="">
                    </div>
                    <div class="px-0 col-auto ms-2">
                        ${this.capacity} orang
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="px-0 col-auto">
                        <img src="icons/fi_settings.svg" width="20px" alt="" srcset="">
                    </div>
                    <div class="px-0 col-auto ms-2">
                        ${this.transmission}
                    </div>
                </div>
                <div class="row mt-2 mb-4">
                    <div class="px-0 col-auto">
                        <img src="icons/fi_calendar.svg" width="20px" alt="" srcset="">
                    </div>
                    <div class="px-0 col-auto ms-2">
                        Tahun ${this.year}
                    </div>
                </div>

                <a href="#" class="btn btn-success" style="width:100%">Pilih Mobil</a>
            </div>
        </div>

      
    `;
  }
}
