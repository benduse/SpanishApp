const words = [
  {
    "word": "empresa",
    "phonetics": "emˈpɾesa",
    "part_of_speech": "noun",
    "meaning": "company",
    "example_es": "La empresa creció rápidamente este año.",
    "example_en": "The company grew quickly this year."
  },
  {
    "word": "mercado",
    "phonetics": "meɾˈkaðo",
    "part_of_speech": "noun",
    "meaning": "market",
    "example_es": "El mercado tecnológico está en expansión.",
    "example_en": "The technology market is expanding."
  },
  {
    "word": "contrato",
    "phonetics": "konˈtɾato",
    "part_of_speech": "noun",
    "meaning": "contract",
    "example_es": "Firmamos un contrato con la nueva socia.",
    "example_en": "We signed a contract with the new partner."
  },
  {
    "word": "proyecto",
    "phonetics": "pɾoˈʝekto",
    "part_of_speech": "noun",
    "meaning": "project",
    "example_es": "El proyecto necesita más inversión.",
    "example_en": "The project needs more investment."
  },
  {
    "word": "cliente",
    "phonetics": "kliˈente",
    "part_of_speech": "noun",
    "meaning": "client",
    "example_es": "Cada cliente es importante para el negocio.",
    "example_en": "Every client is important for the business."
  },
  {
    "word": "jefe",
    "phonetics": "ˈxefe",
    "part_of_speech": "noun",
    "meaning": "boss",
    "example_es": "Mi jefe aprobó la propuesta.",
    "example_en": "My boss approved the proposal."
  },
  {
    "word": "reunión",
    "phonetics": "rewˈnjon",
    "part_of_speech": "noun",
    "meaning": "meeting",
    "example_es": "Tendremos una reunión mañana a las diez.",
    "example_en": "We will have a meeting tomorrow at ten."
  },
  {
    "word": "correo",
    "phonetics": "koˈreo",
    "part_of_speech": "noun",
    "meaning": "mail / email",
    "example_es": "Te envié un correo con los detalles.",
    "example_en": "I sent you an email with the details."
  },
  {
    "word": "trabajo",
    "phonetics": "tɾaˈβaxo",
    "part_of_speech": "noun",
    "meaning": "work / job",
    "example_es": "Tengo mucho trabajo pendiente.",
    "example_en": "I have a lot of pending work."
  },
  {
    "word": "negocio",
    "phonetics": "neˈɣosjo",
    "part_of_speech": "noun",
    "meaning": "business",
    "example_es": "El negocio fue exitoso desde el inicio.",
    "example_en": "The business was successful from the start."
  },
  {
    "word": "computadora",
    "phonetics": "kompu.taˈðoɾa",
    "part_of_speech": "noun",
    "meaning": "computer",
    "example_es": "La computadora está encendida todo el día.",
    "example_en": "The computer is on all day."
  },
  {
    "word": "tecnología",
    "phonetics": "tekno̞loˈxia",
    "part_of_speech": "noun",
    "meaning": "technology",
    "example_es": "La tecnología cambia rápidamente.",
    "example_en": "Technology changes quickly."
  },
  {
    "word": "internet",
    "phonetics": "inteɾˈnet",
    "part_of_speech": "noun",
    "meaning": "internet",
    "example_es": "Hoy en día todos usan internet.",
    "example_en": "Nowadays everyone uses the internet."
  },
  {
    "word": "mensaje",
    "phonetics": "menˈsaxe",
    "part_of_speech": "noun",
    "meaning": "message",
    "example_es": "Me llegó un mensaje importante.",
    "example_en": "I received an important message."
  },
  {
    "word": "teléfono",
    "phonetics": "teˈlefono",
    "part_of_speech": "noun",
    "meaning": "telephone",
    "example_es": "El teléfono está sonando.",
    "example_en": "The phone is ringing."
  },
  {
    "word": "inventar",
    "phonetics": "inbenˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to invent",
    "example_es": "Quieren inventar una nueva aplicación.",
    "example_en": "They want to invent a new application."
  },
  {
    "word": "vender",
    "phonetics": "benˈdeɾ",
    "part_of_speech": "verb",
    "meaning": "to sell",
    "example_es": "La tienda va a vender productos ecológicos.",
    "example_en": "The store will sell eco-friendly products."
  },
  {
    "word": "comprar",
    "phonetics": "komˈpɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to buy",
    "example_es": "Quiero comprar un nuevo ordenador.",
    "example_en": "I want to buy a new computer."
  },
  {
    "word": "invertir",
    "phonetics": "inbeɾˈtiɾ",
    "part_of_speech": "verb",
    "meaning": "to invest",
    "example_es": "Planean invertir en energías renovables.",
    "example_en": "They plan to invest in renewable energies."
  },
  {
    "word": "producir",
    "phonetics": "pɾoðuˈsiɾ",
    "part_of_speech": "verb",
    "meaning": "to produce",
    "example_es": "La fábrica produce piezas electrónicas.",
    "example_en": "The factory produces electronic parts."
  },
  {
    "word": "empresa",
    "phonetics": "emˈpɾesa",
    "part_of_speech": "noun",
    "meaning": "company",
    "example_es": "La empresa creció rápidamente este año.",
    "example_en": "The company grew quickly this year."
  },
  {
    "word": "mercado",
    "phonetics": "meɾˈkaðo",
    "part_of_speech": "noun",
    "meaning": "market",
    "example_es": "El mercado tecnológico está en expansión.",
    "example_en": "The technology market is expanding."
  },
  {
    "word": "contrato",
    "phonetics": "konˈtɾato",
    "part_of_speech": "noun",
    "meaning": "contract",
    "example_es": "Firmamos un contrato con la nueva socia.",
    "example_en": "We signed a contract with the new partner."
  },
  {
    "word": "proyecto",
    "phonetics": "pɾoˈʝekto",
    "part_of_speech": "noun",
    "meaning": "project",
    "example_es": "El proyecto necesita más inversión.",
    "example_en": "The project needs more investment."
  },
  {
    "word": "cliente",
    "phonetics": "kliˈente",
    "part_of_speech": "noun",
    "meaning": "client",
    "example_es": "Cada cliente es importante para el negocio.",
    "example_en": "Every client is important for the business."
  },
  {
    "word": "jefe",
    "phonetics": "ˈxefe",
    "part_of_speech": "noun",
    "meaning": "boss",
    "example_es": "Mi jefe aprobó la propuesta.",
    "example_en": "My boss approved the proposal."
  },
  {
    "word": "reunión",
    "phonetics": "rewˈnjon",
    "part_of_speech": "noun",
    "meaning": "meeting",
    "example_es": "Tendremos una reunión mañana a las diez.",
    "example_en": "We will have a meeting tomorrow at ten."
  },
  {
    "word": "correo",
    "phonetics": "koˈreo",
    "part_of_speech": "noun",
    "meaning": "mail/email",
    "example_es": "Te envié un correo con los detalles.",
    "example_en": "I sent you an email with the details."
  },
  {
    "word": "trabajo",
    "phonetics": "tɾaˈβaxo",
    "part_of_speech": "noun",
    "meaning": "work/job",
    "example_es": "Tengo mucho trabajo pendiente.",
    "example_en": "I have a lot of pending work."
  },
  {
    "word": "negocio",
    "phonetics": "neˈɣosjo",
    "part_of_speech": "noun",
    "meaning": "business",
    "example_es": "El negocio fue exitoso desde el inicio.",
    "example_en": "The business was successful from the start."
  },
  {
    "word": "computadora",
    "phonetics": "kompu.taˈðoɾa",
    "part_of_speech": "noun",
    "meaning": "computer",
    "example_es": "La computadora está encendida todo el día.",
    "example_en": "The computer is on all day."
  },
  {
    "word": "tecnología",
    "phonetics": "tekno̞loˈxia",
    "part_of_speech": "noun",
    "meaning": "technology",
    "example_es": "La tecnología cambia rápidamente.",
    "example_en": "Technology changes quickly."
  },
  {
    "word": "internet",
    "phonetics": "inteɾˈnet",
    "part_of_speech": "noun",
    "meaning": "internet",
    "example_es": "Hoy en día todos usan internet.",
    "example_en": "Nowadays everyone uses the internet."
  },
  {
    "word": "mensaje",
    "phonetics": "menˈsaxe",
    "part_of_speech": "noun",
    "meaning": "message",
    "example_es": "Me llegó un mensaje importante.",
    "example_en": "I received an important message."
  },
  {
    "word": "teléfono",
    "phonetics": "teˈlefono",
    "part_of_speech": "noun",
    "meaning": "telephone",
    "example_es": "El teléfono está sonando.",
    "example_en": "The phone is ringing."
  },
  {
    "word": "inventar",
    "phonetics": "inbenˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to invent",
    "example_es": "Quieren inventar una nueva aplicación.",
    "example_en": "They want to invent a new application."
  },
  {
    "word": "vender",
    "phonetics": "benˈdeɾ",
    "part_of_speech": "verb",
    "meaning": "to sell",
    "example_es": "La tienda va a vender productos ecológicos.",
    "example_en": "The store will sell eco-friendly products."
  },
  {
    "word": "comprar",
    "phonetics": "komˈpɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to buy",
    "example_es": "Quiero comprar un nuevo ordenador.",
    "example_en": "I want to buy a new computer."
  },
  {
    "word": "invertir",
    "phonetics": "inbeɾˈtiɾ",
    "part_of_speech": "verb",
    "meaning": "to invest",
    "example_es": "Planean invertir en energías renovables.",
    "example_en": "They plan to invest in renewable energies."
  },
  {
    "word": "producir",
    "phonetics": "pɾoðuˈsiɾ",
    "part_of_speech": "verb",
    "meaning": "to produce",
    "example_es": "La fábrica produce piezas electrónicas.",
    "example_en": "The factory produces electronic parts."
  },
  {
    "word": "ahorrar",
    "phonetics": "aoˈraɾ",
    "part_of_speech": "verb",
    "meaning": "to save (money)",
    "example_es": "Es importante ahorrar para el futuro.",
    "example_en": "It’s important to save for the future."
  },
  {
    "word": "pagar",
    "phonetics": "paˈɣaɾ",
    "part_of_speech": "verb",
    "meaning": "to pay",
    "example_es": "Necesito pagar la factura hoy.",
    "example_en": "I need to pay the bill today."
  },
  {
    "word": "cobrar",
    "phonetics": "koˈβɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to charge, to collect payment",
    "example_es": "El restaurante va a cobrar más el próximo mes.",
    "example_en": "The restaurant will charge more next month."
  },
  {
    "word": "ganar",
    "phonetics": "ɡaˈnaɾ",
    "part_of_speech": "verb",
    "meaning": "to earn, to win",
    "example_es": "Ella logró ganar el concurso.",
    "example_en": "She managed to win the contest."
  },
  {
    "word": "perder",
    "phonetics": "peɾˈdeɾ",
    "part_of_speech": "verb",
    "meaning": "to lose",
    "example_es": "No quiero perder mi dinero.",
    "example_en": "I don’t want to lose my money."
  },
  {
    "word": "oficina",
    "phonetics": "ofiˈsina",
    "part_of_speech": "noun",
    "meaning": "office",
    "example_es": "Trabajo en una oficina grande.",
    "example_en": "I work in a big office."
  },
  {
    "word": "horario",
    "phonetics": "oˈɾaɾjo",
    "part_of_speech": "noun",
    "meaning": "schedule",
    "example_es": "Tengo un horario flexible.",
    "example_en": "I have a flexible schedule."
  },
  {
    "word": "producto",
    "phonetics": "pɾoˈðukto",
    "part_of_speech": "noun",
    "meaning": "product",
    "example_es": "Este producto es muy popular.",
    "example_en": "This product is very popular."
  },
  {
    "word": "servicio",
    "phonetics": "seɾˈβisjo",
    "part_of_speech": "noun",
    "meaning": "service",
    "example_es": "El servicio al cliente es excelente.",
    "example_en": "The customer service is excellent."
  },
  {
    "word": "beneficio",
    "phonetics": "beneˈfisjo",
    "part_of_speech": "noun",
    "meaning": "benefit",
    "example_es": "Los beneficios del acuerdo son claros.",
    "example_en": "The benefits of the agreement are clear."
  },
  {
    "word": "precio",
    "phonetics": "ˈpɾesjo",
    "part_of_speech": "noun",
    "meaning": "price",
    "example_es": "El precio del producto aumentó.",
    "example_en": "The product’s price increased."
  },
  {
    "word": "dinero",
    "phonetics": "diˈneɾo",
    "part_of_speech": "noun",
    "meaning": "money",
    "example_es": "Necesito dinero para viajar.",
    "example_en": "I need money to travel."
  },
  {
    "word": "banco",
    "phonetics": "ˈbaŋko",
    "part_of_speech": "noun",
    "meaning": "bank",
    "example_es": "El banco está cerrado hoy.",
    "example_en": "The bank is closed today."
  },
  {
    "word": "cuenta",
    "phonetics": "ˈkwenta",
    "part_of_speech": "noun",
    "meaning": "account, bill",
    "example_es": "Abrí una nueva cuenta bancaria.",
    "example_en": "I opened a new bank account."
  },
  {
    "word": "ahorro",
    "phonetics": "aˈoro",
    "part_of_speech": "noun",
    "meaning": "savings",
    "example_es": "Mis ahorros están seguros en el banco.",
    "example_en": "My savings are safe in the bank."
  },
  {
    "word": "riesgo",
    "phonetics": "ˈrjesɣo",
    "part_of_speech": "noun",
    "meaning": "risk",
    "example_es": "Toda inversión conlleva un riesgo.",
    "example_en": "Every investment carries a risk."
  },
  {
    "word": "contraseña",
    "phonetics": "kontɾaˈseɲa",
    "part_of_speech": "noun",
    "meaning": "password",
    "example_es": "Olvidé mi contraseña de correo.",
    "example_en": "I forgot my email password."
  },
  {
    "word": "seguridad",
    "phonetics": "seɣuɾiˈðað",
    "part_of_speech": "noun",
    "meaning": "security",
    "example_es": "La seguridad informática es crucial.",
    "example_en": "Computer security is crucial."
  },
  {
    "word": "información",
    "phonetics": "infoɾmaˈsjon",
    "part_of_speech": "noun",
    "meaning": "information",
    "example_es": "Necesitamos más información para decidir.",
    "example_en": "We need more information to decide."
  },
  {
    "word": "usuario",
    "phonetics": "usuˈaɾjo",
    "part_of_speech": "noun",
    "meaning": "user",
    "example_es": "Cada usuario tiene una cuenta personal.",
    "example_en": "Each user has a personal account."
  },
  {
    "word": "sistema",
    "phonetics": "sisˈtema",
    "part_of_speech": "noun",
    "meaning": "system",
    "example_es": "El sistema necesita una actualización.",
    "example_en": "The system needs an update."
  },
  {
    "word": "programa",
    "phonetics": "pɾoˈɣɾama",
    "part_of_speech": "noun",
    "meaning": "program",
    "example_es": "Estoy instalando un nuevo programa.",
    "example_en": "I am installing a new program."
  },
  {
    "word": "aplicación",
    "phonetics": "aplikaˈsjon",
    "part_of_speech": "noun",
    "meaning": "application (app)",
    "example_es": "Descargué una nueva aplicación de banca móvil.",
    "example_en": "I downloaded a new mobile banking app."
  },
  {
    "word": "programador",
    "phonetics": "pɾoɣɾamaˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "programmer",
    "example_es": "El programador corrigió el error en el sistema.",
    "example_en": "The programmer fixed the error in the system."
  },
  {
    "word": "base de datos",
    "phonetics": "ˈbase ðe ˈðatos",
    "part_of_speech": "noun",
    "meaning": "database",
    "example_es": "La base de datos almacena información crítica.",
    "example_en": "The database stores critical information."
  },
  {
    "word": "archivo",
    "phonetics": "aɾˈtʃiβo",
    "part_of_speech": "noun",
    "meaning": "file",
    "example_es": "Subí el archivo al servidor.",
    "example_en": "I uploaded the file to the server."
  },
  {
    "word": "servidor",
    "phonetics": "seɾβiˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "server",
    "example_es": "El servidor está en mantenimiento.",
    "example_en": "The server is under maintenance."
  },
  {
    "word": "red",
    "phonetics": "ɾeð",
    "part_of_speech": "noun",
    "meaning": "network",
    "example_es": "La red inalámbrica funciona bien.",
    "example_en": "The wireless network works fine."
  },
  {
    "word": "pantalla",
    "phonetics": "panˈtaʎa",
    "part_of_speech": "noun",
    "meaning": "screen",
    "example_es": "La pantalla del ordenador es muy grande.",
    "example_en": "The computer screen is very big."
  },
  {
    "word": "teclado",
    "phonetics": "tekˈlaðo",
    "part_of_speech": "noun",
    "meaning": "keyboard",
    "example_es": "Compré un teclado inalámbrico.",
    "example_en": "I bought a wireless keyboard."
  },
  {
    "word": "ratón",
    "phonetics": "raˈton",
    "part_of_speech": "noun",
    "meaning": "mouse",
    "example_es": "El ratón no funciona bien.",
    "example_en": "The mouse is not working well."
  },
  {
    "word": "impresora",
    "phonetics": "impɾeˈsoɾa",
    "part_of_speech": "noun",
    "meaning": "printer",
    "example_es": "La impresora se quedó sin tinta.",
    "example_en": "The printer ran out of ink."
  },
  {
    "word": "pantalla táctil",
    "phonetics": "panˈtaʎa ˈtakt̪il",
    "part_of_speech": "noun",
    "meaning": "touchscreen",
    "example_es": "El teléfono tiene pantalla táctil.",
    "example_en": "The phone has a touchscreen."
  },
  {
    "word": "correo electrónico",
    "phonetics": "koˈreo elekˈtɾoniko",
    "part_of_speech": "noun",
    "meaning": "email",
    "example_es": "Reviso mi correo electrónico cada mañana.",
    "example_en": "I check my email every morning."
  },
  {
    "word": "almacenar",
    "phonetics": "almaθeˈnaɾ",
    "part_of_speech": "verb",
    "meaning": "to store",
    "example_es": "Puedes almacenar los documentos en la nube.",
    "example_en": "You can store the documents in the cloud."
  },
  {
    "word": "descargar",
    "phonetics": "deskarrˈɣaɾ",
    "part_of_speech": "verb",
    "meaning": "to download",
    "example_es": "Voy a descargar el informe ahora.",
    "example_en": "I’m going to download the report now."
  },
  {
    "word": "subir",
    "phonetics": "suˈβiɾ",
    "part_of_speech": "verb",
    "meaning": "to upload",
    "example_es": "Debes subir las fotos al servidor.",
    "example_en": "You must upload the pictures to the server."
  },
  {
    "word": "actualizar",
    "phonetics": "aktualiðˈθaɾ",
    "part_of_speech": "verb",
    "meaning": "to update",
    "example_es": "Vamos a actualizar el sistema operativo.",
    "example_en": "We are going to update the operating system."
  },
  {
    "word": "instalar",
    "phonetics": "instaˈlaɾ",
    "part_of_speech": "verb",
    "meaning": "to install",
    "example_es": "Necesito instalar un nuevo programa.",
    "example_en": "I need to install a new program."
  },
  {
    "word": "conectar",
    "phonetics": "konekˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to connect",
    "example_es": "Debes conectar el cable al puerto USB.",
    "example_en": "You must connect the cable to the USB port."
  },
  {
    "word": "desconectar",
    "phonetics": "deskonekˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to disconnect",
    "example_es": "Es mejor desconectar el equipo antes de reparar.",
    "example_en": "It’s better to disconnect the device before repairing."
  },
  {
    "word": "buscar",
    "phonetics": "busˈkaɾ",
    "part_of_speech": "verb",
    "meaning": "to search",
    "example_es": "Necesitamos buscar información en internet.",
    "example_en": "We need to search for information online."
  },
  {
    "word": "compartir",
    "phonetics": "kompaɾˈtiɾ",
    "part_of_speech": "verb",
    "meaning": "to share",
    "example_es": "Voy a compartir el archivo contigo.",
    "example_en": "I will share the file with you."
  },
  {
    "word": "crear",
    "phonetics": "kɾeˈaɾ",
    "part_of_speech": "verb",
    "meaning": "to create",
    "example_es": "Quiero crear un nuevo documento.",
    "example_en": "I want to create a new document."
  },
  {
    "word": "eliminar",
    "phonetics": "elimiˈnaɾ",
    "part_of_speech": "verb",
    "meaning": "to delete, remove",
    "example_es": "Debemos eliminar los archivos innecesarios.",
    "example_en": "We must delete unnecessary files."
  },
  {
    "word": "guardar",
    "phonetics": "ɡwaɾˈðaɾ",
    "part_of_speech": "verb",
    "meaning": "to save",
    "example_es": "No olvides guardar el documento.",
    "example_en": "Don’t forget to save the document."
  },
  {
    "word": "editar",
    "phonetics": "eðiˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to edit",
    "example_es": "Voy a editar el video antes de publicarlo.",
    "example_en": "I will edit the video before publishing it."
  },
  {
    "word": "cerrar",
    "phonetics": "θeˈraɾ",
    "part_of_speech": "verb",
    "meaning": "to close, shut",
    "example_es": "Debes cerrar la aplicación después de usarla.",
    "example_en": "You must close the app after using it."
  },
  {
    "word": "abrir",
    "phonetics": "aˈβɾiɾ",
    "part_of_speech": "verb",
    "meaning": "to open",
    "example_es": "Voy a abrir un documento nuevo.",
    "example_en": "I’m going to open a new document."
  },
  {
    "word": "encender",
    "phonetics": "ensenˈdeɾ",
    "part_of_speech": "verb",
    "meaning": "to turn on",
    "example_es": "Necesito encender el proyector.",
    "example_en": "I need to turn on the projector."
  },
  {
    "word": "apagar",
    "phonetics": "apaˈɣaɾ",
    "part_of_speech": "verb",
    "meaning": "to turn off",
    "example_es": "Debes apagar la computadora antes de salir.",
    "example_en": "You must turn off the computer before leaving."
  },
  {
    "word": "subir de nivel",
    "phonetics": "suˈβiɾ ðe niˈβel",
    "part_of_speech": "verb phrase",
    "meaning": "to level up",
    "example_es": "El jugador logró subir de nivel rápidamente.",
    "example_en": "The player managed to level up quickly."
  },
  {
    "word": "empleado",
    "phonetics": "empleˈaðo",
    "part_of_speech": "noun",
    "meaning": "employee",
    "example_es": "La empresa contrató a un nuevo empleado.",
    "example_en": "The company hired a new employee."
  },
  {
    "word": "gerente",
    "phonetics": "xeˈɾente",
    "part_of_speech": "noun",
    "meaning": "manager",
    "example_es": "El gerente organizó la reunión semanal.",
    "example_en": "The manager organized the weekly meeting."
  },
  {
    "word": "sociedad",
    "phonetics": "soθjeˈðað",
    "part_of_speech": "noun",
    "meaning": "partnership, society",
    "example_es": "Firmaron una sociedad para expandir el negocio.",
    "example_en": "They signed a partnership to expand the business."
  },
  {
    "word": "exportación",
    "phonetics": "eksportaˈθjon",
    "part_of_speech": "noun",
    "meaning": "export",
    "example_es": "La exportación de frutas aumentó este año.",
    "example_en": "The export of fruits increased this year."
  },
  {
    "word": "importación",
    "phonetics": "importaˈθjon",
    "part_of_speech": "noun",
    "meaning": "import",
    "example_es": "La importación de tecnología es necesaria.",
    "example_en": "The import of technology is necessary."
  },
  {
    "word": "competencia",
    "phonetics": "kompeˈtensja",
    "part_of_speech": "noun",
    "meaning": "competition",
    "example_es": "Hay mucha competencia en este sector.",
    "example_en": "There is a lot of competition in this sector."
  },
  {
    "word": "estrategia",
    "phonetics": "estɾaˈtexja",
    "part_of_speech": "noun",
    "meaning": "strategy",
    "example_es": "Necesitamos una nueva estrategia de ventas.",
    "example_en": "We need a new sales strategy."
  },
  {
    "word": "objetivo",
    "phonetics": "oβxeˈtiβo",
    "part_of_speech": "noun",
    "meaning": "goal, objective",
    "example_es": "Mi objetivo es alcanzar más clientes.",
    "example_en": "My goal is to reach more clients."
  },
  {
    "word": "tarea",
    "phonetics": "taˈɾea",
    "part_of_speech": "noun",
    "meaning": "task, assignment",
    "example_es": "Terminé mi tarea a tiempo.",
    "example_en": "I finished my assignment on time."
  },
  {
    "word": "deadline",
    "phonetics": "ˈdedlain",
    "part_of_speech": "noun",
    "meaning": "deadline",
    "example_es": "El deadline del proyecto es el viernes.",
    "example_en": "The deadline for the project is Friday."
  },
  {
    "word": "planificación",
    "phonetics": "planifikaˈθjon",
    "part_of_speech": "noun",
    "meaning": "planning",
    "example_es": "La planificación es clave para el éxito.",
    "example_en": "Planning is key to success."
  },
  {
    "word": "colaborador",
    "phonetics": "kolaboɾaˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "collaborator, contributor",
    "example_es": "El proyecto tuvo varios colaboradores.",
    "example_en": "The project had several collaborators."
  },
  {
    "word": "equipo",
    "phonetics": "eˈkipo",
    "part_of_speech": "noun",
    "meaning": "team, equipment",
    "example_es": "Nuestro equipo logró la meta.",
    "example_en": "Our team achieved the goal."
  },
  {
    "word": "liderar",
    "phonetics": "liðeˈɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to lead",
    "example_es": "Va a liderar el nuevo proyecto.",
    "example_en": "He is going to lead the new project."
  },
  {
    "word": "negociar",
    "phonetics": "neɣoˈsjaɾ",
    "part_of_speech": "verb",
    "meaning": "to negotiate",
    "example_es": "Ellos quieren negociar mejores condiciones.",
    "example_en": "They want to negotiate better conditions."
  },
  {
    "word": "resolver",
    "phonetics": "resolˈβeɾ",
    "part_of_speech": "verb",
    "meaning": "to solve",
    "example_es": "Debemos resolver este problema lo antes posible.",
    "example_en": "We must solve this problem as soon as possible."
  },
  {
    "word": "progresar",
    "phonetics": "proɣɾeˈsaɾ",
    "part_of_speech": "verb",
    "meaning": "to progress",
    "example_es": "La empresa sigue progresando.",
    "example_en": "The company continues progressing."
  },
  {
    "word": "desarrollar",
    "phonetics": "desaˈroʝaɾ",
    "part_of_speech": "verb",
    "meaning": "to develop",
    "example_es": "Quieren desarrollar un nuevo producto.",
    "example_en": "They want to develop a new product."
  },
  {
    "word": "superar",
    "phonetics": "supeˈɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to overcome",
    "example_es": "Logré superar todas las dificultades.",
    "example_en": "I managed to overcome all difficulties."
  },
  {
    "word": "crecer",
    "phonetics": "kɾeˈθeɾ",
    "part_of_speech": "verb",
    "meaning": "to grow",
    "example_es": "El negocio empezó a crecer rápidamente.",
    "example_en": "The business started to grow quickly."
  },
  {
    "word": "viaje",
    "phonetics": "ˈbja.xe",
    "part_of_speech": "noun",
    "meaning": "trip, travel",
    "example_es": "El viaje a Madrid fue muy productivo.",
    "example_en": "The trip to Madrid was very productive."
  },
  {
    "word": "reporte",
    "phonetics": "reˈpoɾ.te",
    "part_of_speech": "noun",
    "meaning": "report",
    "example_es": "El gerente nos pidió un reporte mensual.",
    "example_en": "The manager asked us for a monthly report."
  },
  {
    "word": "presentación",
    "phonetics": "pɾesentaˈθjon",
    "part_of_speech": "noun",
    "meaning": "presentation",
    "example_es": "Hice una presentación frente a los clientes.",
    "example_en": "I gave a presentation to the clients."
  },
  {
    "word": "gráfico",
    "phonetics": "ˈɡɾafiko",
    "part_of_speech": "noun",
    "meaning": "chart, graphic",
    "example_es": "El gráfico explica las ventas del año.",
    "example_en": "The chart explains the sales of the year."
  },
  {
    "word": "estadística",
    "phonetics": "estaˈðistika",
    "part_of_speech": "noun",
    "meaning": "statistic",
    "example_es": "Las estadísticas muestran una tendencia positiva.",
    "example_en": "The statistics show a positive trend."
  },
  {
    "word": "documento",
    "phonetics": "dokumenˈto",
    "part_of_speech": "noun",
    "meaning": "document",
    "example_es": "Subí el documento a la nube.",
    "example_en": "I uploaded the document to the cloud."
  },
  {
    "word": "meta",
    "phonetics": "ˈmeta",
    "part_of_speech": "noun",
    "meaning": "goal, target",
    "example_es": "Logré mi meta de ventas.",
    "example_en": "I reached my sales target."
  },
  {
    "word": "asunto",
    "phonetics": "aˈsunto",
    "part_of_speech": "noun",
    "meaning": "matter, subject",
    "example_es": "Este es un asunto importante.",
    "example_en": "This is an important matter."
  },
  {
    "word": "firma",
    "phonetics": "ˈfiɾma",
    "part_of_speech": "noun",
    "meaning": "signature, firm (company)",
    "example_es": "La firma fue necesaria para validar el contrato.",
    "example_en": "The signature was necessary to validate the contract."
  },
  {
    "word": "legal",
    "phonetics": "leˈɣal",
    "part_of_speech": "adjective",
    "meaning": "legal",
    "example_es": "El documento tiene validez legal.",
    "example_en": "The document has legal validity."
  },
  {
    "word": "jurídico",
    "phonetics": "xuˈɾiðiko",
    "part_of_speech": "adjective",
    "meaning": "judicial, legal-related",
    "example_es": "Necesitamos asesoría jurídica.",
    "example_en": "We need legal advice."
  },
  {
    "word": "fiscal",
    "phonetics": "fisˈkal",
    "part_of_speech": "adjective",
    "meaning": "fiscal, tax-related",
    "example_es": "Hay nuevas leyes fiscales este año.",
    "example_en": "There are new tax laws this year."
  },
  {
    "word": "presupuesto",
    "phonetics": "pɾesupwesˈto",
    "part_of_speech": "noun",
    "meaning": "budget",
    "example_es": "El presupuesto del proyecto es limitado.",
    "example_en": "The project’s budget is limited."
  },
  {
    "word": "ingreso",
    "phonetics": "inˈɡɾeso",
    "part_of_speech": "noun",
    "meaning": "income, revenue",
    "example_es": "Los ingresos aumentaron con la nueva campaña.",
    "example_en": "Income increased with the new campaign."
  },
  {
    "word": "gasto",
    "phonetics": "ˈɡasto",
    "part_of_speech": "noun",
    "meaning": "expense",
    "example_es": "Los gastos operativos son demasiado altos.",
    "example_en": "The operating expenses are too high."
  },
  {
    "word": "ahorro",
    "phonetics": "aˈoro",
    "part_of_speech": "noun",
    "meaning": "savings",
    "example_es": "El ahorro es fundamental en tiempos difíciles.",
    "example_en": "Saving is essential in difficult times."
  },
  {
    "word": "inversión",
    "phonetics": "inbeɾˈsjon",
    "part_of_speech": "noun",
    "meaning": "investment",
    "example_es": "La inversión en tecnología traerá beneficios.",
    "example_en": "Investment in technology will bring benefits."
  },
  {
    "word": "préstamo",
    "phonetics": "ˈpɾestamo",
    "part_of_speech": "noun",
    "meaning": "loan",
    "example_es": "Solicitó un préstamo para su negocio.",
    "example_en": "He applied for a loan for his business."
  },
  {
    "word": "interés",
    "phonetics": "inteˈɾes",
    "part_of_speech": "noun",
    "meaning": "interest (financial or curiosity)",
    "example_es": "El banco cobra un interés alto.",
    "example_en": "The bank charges a high interest rate."
  },
  {
    "word": "crédito",
    "phonetics": "ˈkɾeðito",
    "part_of_speech": "noun",
    "meaning": "credit",
    "example_es": "El crédito ayuda a financiar nuevas empresas.",
    "example_en": "Credit helps finance new businesses."
  },
  {
    "word": "débito",
    "phonetics": "ˈdeβito",
    "part_of_speech": "noun",
    "meaning": "debit",
    "example_es": "Pagué con mi tarjeta de débito.",
    "example_en": "I paid with my debit card."
  },
  {
    "word": "tarjeta",
    "phonetics": "taɾˈxeta",
    "part_of_speech": "noun",
    "meaning": "card (bank, ID, business)",
    "example_es": "Tengo una tarjeta de crédito nueva.",
    "example_en": "I have a new credit card."
  },
  {
    "word": "factura",
    "phonetics": "fakˈtuɾa",
    "part_of_speech": "noun",
    "meaning": "invoice, bill",
    "example_es": "Recibimos la factura del proveedor.",
    "example_en": "We received the supplier’s invoice."
  },
  {
    "word": "proveedor",
    "phonetics": "pɾoβeˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "supplier",
    "example_es": "El proveedor entregó los productos a tiempo.",
    "example_en": "The supplier delivered the products on time."
  },
  {
    "word": "almacén",
    "phonetics": "almaˈθen",
    "part_of_speech": "noun",
    "meaning": "warehouse, store",
    "example_es": "El almacén está lleno de mercancías.",
    "example_en": "The warehouse is full of goods."
  },
  {
    "word": "inventario",
    "phonetics": "inbenˈtaɾjo",
    "part_of_speech": "noun",
    "meaning": "inventory",
    "example_es": "Estamos revisando el inventario mensual.",
    "example_en": "We are reviewing the monthly inventory."
  },
  {
    "word": "campaña",
    "phonetics": "kamˈpaɲa",
    "part_of_speech": "noun",
    "meaning": "campaign",
    "example_es": "La campaña publicitaria fue exitosa.",
    "example_en": "The advertising campaign was successful."
  },
  {
    "word": "publicidad",
    "phonetics": "puβlisiˈðað",
    "part_of_speech": "noun",
    "meaning": "advertising",
    "example_es": "Invertimos mucho en publicidad digital.",
    "example_en": "We invested heavily in digital advertising."
  },
  {
    "word": "anuncio",
    "phonetics": "aˈnunθjo",
    "part_of_speech": "noun",
    "meaning": "advertisement, announcement",
    "example_es": "El anuncio fue transmitido en televisión.",
    "example_en": "The ad was broadcast on television."
  },
  {
    "word": "marca",
    "phonetics": "ˈmaɾka",
    "part_of_speech": "noun",
    "meaning": "brand",
    "example_es": "Es una marca muy reconocida en el mercado.",
    "example_en": "It is a well-recognized brand in the market."
  },
  {
    "word": "logotipo",
    "phonetics": "loɣoˈtipo",
    "part_of_speech": "noun",
    "meaning": "logo",
    "example_es": "El logotipo de la empresa cambió el año pasado.",
    "example_en": "The company's logo changed last year."
  },
  {
    "word": "eslogan",
    "phonetics": "esˈloɣan",
    "part_of_speech": "noun",
    "meaning": "slogan",
    "example_es": "El nuevo eslogan es muy atractivo.",
    "example_en": "The new slogan is very catchy."
  },
  {
    "word": "cliente potencial",
    "phonetics": "kliˈente potenˈθjal",
    "part_of_speech": "noun phrase",
    "meaning": "potential client",
    "example_es": "Tenemos varios clientes potenciales en Europa.",
    "example_en": "We have several potential clients in Europe."
  },
  {
    "word": "mercadotecnia",
    "phonetics": "meɾkaðoˈteknja",
    "part_of_speech": "noun",
    "meaning": "marketing",
    "example_es": "La mercadotecnia digital es muy efectiva.",
    "example_en": "Digital marketing is very effective."
  },
  {
    "word": "promoción",
    "phonetics": "pɾomoˈsjon",
    "part_of_speech": "noun",
    "meaning": "promotion",
    "example_es": "Lanzamos una promoción especial esta semana.",
    "example_en": "We launched a special promotion this week."
  },
  {
    "word": "descuento",
    "phonetics": "desˈkwento",
    "part_of_speech": "noun",
    "meaning": "discount",
    "example_es": "Ofrecemos un 20% de descuento.",
    "example_en": "We offer a 20% discount."
  },
  {
    "word": "venta",
    "phonetics": "ˈbenta",
    "part_of_speech": "noun",
    "meaning": "sale",
    "example_es": "Las ventas aumentaron en diciembre.",
    "example_en": "Sales increased in December."
  },
  {
    "word": "comprador",
    "phonetics": "kompɾaˈdoɾ",
    "part_of_speech": "noun",
    "meaning": "buyer",
    "example_es": "El comprador pidió un reembolso.",
    "example_en": "The buyer requested a refund."
  },
  {
    "word": "reembolso",
    "phonetics": "re-emˈbolso",
    "part_of_speech": "noun",
    "meaning": "refund",
    "example_es": "El cliente solicitó un reembolso completo.",
    "example_en": "The customer requested a full refund."
  },
  {
    "word": "pedido",
    "phonetics": "peˈðiðo",
    "part_of_speech": "noun",
    "meaning": "order, request",
    "example_es": "Recibimos un pedido de 500 unidades.",
    "example_en": "We received an order of 500 units."
  },
  {
    "word": "entrega",
    "phonetics": "enˈtɾeɣa",
    "part_of_speech": "noun",
    "meaning": "delivery",
    "example_es": "La entrega será mañana por la mañana.",
    "example_en": "The delivery will be tomorrow morning."
  },
  {
    "word": "paquete",
    "phonetics": "paˈkete",
    "part_of_speech": "noun",
    "meaning": "package, parcel",
    "example_es": "El paquete llegó dañado.",
    "example_en": "The package arrived damaged."
  },
  {
    "word": "transportar",
    "phonetics": "tɾanspoɾˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to transport",
    "example_es": "La empresa va a transportar los productos en camiones.",
    "example_en": "The company will transport the products in trucks."
  },
  {
    "word": "enviar",
    "phonetics": "enˈbjaɾ",
    "part_of_speech": "verb",
    "meaning": "to send",
    "example_es": "Voy a enviar un correo al proveedor.",
    "example_en": "I’m going to send an email to the supplier."
  },
  {
    "word": "recibir",
    "phonetics": "resiˈβiɾ",
    "part_of_speech": "verb",
    "meaning": "to receive",
    "example_es": "Recibimos el pago ayer.",
    "example_en": "We received the payment yesterday."
  },
  {
    "word": "confirmar",
    "phonetics": "konfiɾˈmaɾ",
    "part_of_speech": "verb",
    "meaning": "to confirm",
    "example_es": "Necesito confirmar la asistencia a la reunión.",
    "example_en": "I need to confirm attendance at the meeting."
  },
  {
    "word": "cancelar",
    "phonetics": "kanselaɾ",
    "part_of_speech": "verb",
    "meaning": "to cancel",
    "example_es": "El cliente decidió cancelar el pedido.",
    "example_en": "The customer decided to cancel the order."
  },
  {
    "word": "firmar",
    "phonetics": "fiɾˈmaɾ",
    "part_of_speech": "verb",
    "meaning": "to sign",
    "example_es": "Debes firmar el documento aquí.",
    "example_en": "You must sign the document here."
  },
  {
    "word": "aprobar",
    "phonetics": "apɾoˈβaɾ",
    "part_of_speech": "verb",
    "meaning": "to approve",
    "example_es": "El gerente aprobó el presupuesto.",
    "example_en": "The manager approved the budget."
  },
  {
    "word": "rechazar",
    "phonetics": "retʃaˈθaɾ",
    "part_of_speech": "verb",
    "meaning": "to reject",
    "example_es": "El comité decidió rechazar la propuesta.",
    "example_en": "The committee decided to reject the proposal."
  },
  {
    "word": "contratar",
    "phonetics": "kontɾaˈtaɾ",
    "part_of_speech": "verb",
    "meaning": "to hire, to contract",
    "example_es": "Quieren contratar a más personal.",
    "example_en": "They want to hire more staff."
  },
  {
    "word": "despedir",
    "phonetics": "despeˈðiɾ",
    "part_of_speech": "verb",
    "meaning": "to fire, to dismiss",
    "example_es": "Decidieron despedir al empleado por incumplimiento.",
    "example_en": "They decided to fire the employee for noncompliance."
  },
  {
    "word": "capacitación",
    "phonetics": "kapasi.taˈθjon",
    "part_of_speech": "noun",
    "meaning": "training",
    "example_es": "Los nuevos empleados reciben capacitación.",
    "example_en": "New employees receive training."
  },
  {
    "word": "entrevista",
    "phonetics": "entɾeˈβista",
    "part_of_speech": "noun",
    "meaning": "interview",
    "example_es": "Tuve una entrevista de trabajo ayer.",
    "example_en": "I had a job interview yesterday."
  },
  {
    "word": "currículum",
    "phonetics": "kuˈrikulum",
    "part_of_speech": "noun",
    "meaning": "resume, CV",
    "example_es": "Envié mi currículum a la empresa.",
    "example_en": "I sent my resume to the company."
  },
  {
    "word": "experiencia",
    "phonetics": "ekspeˈɾjensja",
    "part_of_speech": "noun",
    "meaning": "experience",
    "example_es": "Ella tiene mucha experiencia en ventas.",
    "example_en": "She has a lot of experience in sales."
  },
  {
    "word": "habilidad",
    "phonetics": "aβiliˈðað",
    "part_of_speech": "noun",
    "meaning": "skill, ability",
    "example_es": "La comunicación es una habilidad clave.",
    "example_en": "Communication is a key skill."
  },
  {
    "word": "logro",
    "phonetics": "ˈloɣɾo",
    "part_of_speech": "noun",
    "meaning": "achievement",
    "example_es": "Obtener ese contrato fue un gran logro.",
    "example_en": "Getting that contract was a big achievement."
  },
  {
    "word": "objetivo profesional",
    "phonetics": "oβxeˈtiβo pɾofesjoˈnal",
    "part_of_speech": "noun phrase",
    "meaning": "career goal",
    "example_es": "Mi objetivo profesional es convertirme en gerente.",
    "example_en": "My career goal is to become a manager."
  },
  {
    "word": "éxito",
    "phonetics": "ˈeksito",
    "part_of_speech": "noun",
    "meaning": "success",
    "example_es": "El proyecto fue un éxito rotundo.",
    "example_en": "The project was a resounding success."
  },
  {
    "word": "fracaso",
    "phonetics": "fɾaˈkaso",
    "part_of_speech": "noun",
    "meaning": "failure",
    "example_es": "Aprendimos de nuestro fracaso anterior.",
    "example_en": "We learned from our previous failure."
  },
  {
    "word": "oportunidad",
    "phonetics": "opoɾtuniˈðað",
    "part_of_speech": "noun",
    "meaning": "opportunity",
    "example_es": "Esta es una gran oportunidad de negocio.",
    "example_en": "This is a great business opportunity."
  },
  {
    "word": "desafío",
    "phonetics": "desaˈfio",
    "part_of_speech": "noun",
    "meaning": "challenge",
    "example_es": "Superamos un gran desafío juntos.",
    "example_en": "We overcame a big challenge together."
  },
  {
    "word": "estrés",
    "phonetics": "esˈtɾes",
    "part_of_speech": "noun",
    "meaning": "stress",
    "example_es": "El trabajo bajo presión causa mucho estrés.",
    "example_en": "Working under pressure causes a lot of stress."
  },
  {
    "word": "descanso",
    "phonetics": "desˈkanso",
    "part_of_speech": "noun",
    "meaning": "break, rest",
    "example_es": "Es necesario tomar un descanso durante la jornada.",
    "example_en": "It is necessary to take a break during the workday."
  },
  {
    "word": "motivación",
    "phonetics": "motibaˈθjon",
    "part_of_speech": "noun",
    "meaning": "motivation",
    "example_es": "La motivación del equipo aumentó después del éxito.",
    "example_en": "The team’s motivation increased after the success."
  },
  {
    "word": "productividad",
    "phonetics": "pɾoduktiβiˈðað",
    "part_of_speech": "noun",
    "meaning": "productivity",
    "example_es": "La productividad creció con las nuevas herramientas.",
    "example_en": "Productivity grew with the new tools."
  },
  {
    "word": "colaboración",
    "phonetics": "kolaboɾaˈθjon",
    "part_of_speech": "noun",
    "meaning": "collaboration",
    "example_es": "La colaboración entre equipos fue esencial.",
    "example_en": "Collaboration between teams was essential."
  },
  {
    "word": "equilibrio",
    "phonetics": "ekiliˈβɾjo",
    "part_of_speech": "noun",
    "meaning": "balance, stability",
    "example_es": "El equilibrio entre vida y trabajo es necesario.",
    "example_en": "Work-life balance is necessary."
  },
  {
    "word": "almuerzo",
    "phonetics": "alˈmweɾso",
    "part_of_speech": "noun",
    "meaning": "lunch",
    "example_es": "Tuvimos un almuerzo de negocios muy productivo.",
    "example_en": "We had a very productive business lunch."
  },
  {
    "word": "desayuno",
    "phonetics": "desaˈʝuno",
    "part_of_speech": "noun",
    "meaning": "breakfast",
    "example_es": "El desayuno es la comida más importante del día.",
    "example_en": "Breakfast is the most important meal of the day."
  },
  {
    "word": "cena",
    "phonetics": "ˈθena",
    "part_of_speech": "noun",
    "meaning": "dinner",
    "example_es": "Invité a mi jefe a una cena formal.",
    "example_en": "I invited my boss to a formal dinner."
  },
  {
    "word": "mercancía",
    "phonetics": "meɾkanˈθia",
    "part_of_speech": "noun",
    "meaning": "merchandise",
    "example_es": "La mercancía llegó a tiempo.",
    "example_en": "The merchandise arrived on time."
  },
  {
    "word": "recurso",
    "phonetics": "reˈkuɾso",
    "part_of_speech": "noun",
    "meaning": "resource",
    "example_es": "Los recursos de la empresa son limitados.",
    "example_en": "The company’s resources are limited."
  },
  {
    "word": "materia prima",
    "phonetics": "maˈteɾja ˈpɾima",
    "part_of_speech": "noun phrase",
    "meaning": "raw material",
    "example_es": "La materia prima es esencial para la producción.",
    "example_en": "Raw material is essential for production."
  },
  {
    "word": "herramienta",
    "phonetics": "eraˈmjenta",
    "part_of_speech": "noun",
    "meaning": "tool",
    "example_es": "El software es una herramienta útil para el trabajo.",
    "example_en": "The software is a useful tool for work."
  },
  {
    "word": "máquina",
    "phonetics": "ˈmakina",
    "part_of_speech": "noun",
    "meaning": "machine",
    "example_es": "La máquina está en reparación.",
    "example_en": "The machine is under repair."
  },
  {
    "word": "robot",
    "phonetics": "roˈβot",
    "part_of_speech": "noun",
    "meaning": "robot",
    "example_es": "El robot realiza tareas repetitivas.",
    "example_en": "The robot performs repetitive tasks."
  },
  {
    "word": "inteligencia artificial",
    "phonetics": "intelixenθja aɾtifiˈθjal",
    "part_of_speech": "noun phrase",
    "meaning": "artificial intelligence",
    "example_es": "La inteligencia artificial está revolucionando la tecnología.",
    "example_en": "Artificial intelligence is revolutionizing technology."
  },
  {
    "word": "automatización",
    "phonetics": "awtomatiθaˈθjon",
    "part_of_speech": "noun",
    "meaning": "automation",
    "example_es": "La automatización aumenta la eficiencia.",
    "example_en": "Automation increases efficiency."
  },
  {
    "word": "algoritmo",
    "phonetics": "alɣoˈɾitmo",
    "part_of_speech": "noun",
    "meaning": "algorithm",
    "example_es": "El algoritmo organiza los datos en segundos.",
    "example_en": "The algorithm organizes data in seconds."
  },
  {
    "word": "código",
    "phonetics": "ˈkoðiɣo",
    "part_of_speech": "noun",
    "meaning": "code",
    "example_es": "El programador escribió código limpio.",
    "example_en": "The programmer wrote clean code."
  },
  {
    "word": "contraseña",
    "phonetics": "kontɾaˈseɲa",
    "part_of_speech": "noun",
    "meaning": "password",
    "example_es": "Nunca compartas tu contraseña.",
    "example_en": "Never share your password."
  },
  {
    "word": "usuarios",
    "phonetics": "usuˈaɾjos",
    "part_of_speech": "noun",
    "meaning": "users",
    "example_es": "Los usuarios reportaron un error en la aplicación.",
    "example_en": "The users reported a bug in the app."
  },
  {
    "word": "hackear",
    "phonetics": "akeˈaɾ",
    "part_of_speech": "verb",
    "meaning": "to hack",
    "example_es": "Intentaron hackear el sistema.",
    "example_en": "They tried to hack the system."
  },
  {
    "word": "ciberseguridad",
    "phonetics": "siβeɾseɣuɾiˈðað",
    "part_of_speech": "noun",
    "meaning": "cybersecurity",
    "example_es": "La ciberseguridad es una prioridad.",
    "example_en": "Cybersecurity is a priority."
  },
  {
    "word": "virus",
    "phonetics": "ˈbiɾus",
    "part_of_speech": "noun",
    "meaning": "virus",
    "example_es": "El ordenador estaba infectado con un virus.",
    "example_en": "The computer was infected with a virus."
  },
  {
    "word": "pantalla compartida",
    "phonetics": "panˈtaʎa kompaɾˈtiðað",
    "part_of_speech": "noun phrase",
    "meaning": "shared screen",
    "example_es": "En la videollamada usamos pantalla compartida.",
    "example_en": "During the video call we used screen sharing."
  },
  {
    "word": "videollamada",
    "phonetics": "biðe.oʝaˈmaða",
    "part_of_speech": "noun",
    "meaning": "video call",
    "example_es": "Tuvieron una videollamada importante esta mañana.",
    "example_en": "They had an important video call this morning."
  },
  {
    "word": "reunión virtual",
    "phonetics": "rewˈnjon biɾˈtwal",
    "part_of_speech": "noun phrase",
    "meaning": "virtual meeting",
    "example_es": "La reunión virtual fue muy productiva.",
    "example_en": "The virtual meeting was very productive."
  },
  {
    "word": "plazo",
    "phonetics": "ˈplaso",
    "part_of_speech": "noun",
    "meaning": "term, deadline",
    "example_es": "El plazo para entregar la tarea termina mañana.",
    "example_en": "The deadline to submit the task is tomorrow."
  },
  {
    "word": "horario laboral",
    "phonetics": "oˈɾaɾjo laβoˈɾal",
    "part_of_speech": "noun phrase",
    "meaning": "work schedule",
    "example_es": "Tengo un horario laboral flexible.",
    "example_en": "I have a flexible work schedule."
  },
  {
    "word": "teletrabajo",
    "phonetics": "tele.tɾaˈβaxo",
    "part_of_speech": "noun",
    "meaning": "remote work",
    "example_es": "El teletrabajo se hizo común durante la pandemia.",
    "example_en": "Remote work became common during the pandemic."
  },
  {
    "word": "compañero",
    "phonetics": "kompaˈɲeɾo",
    "part_of_speech": "noun",
    "meaning": "colleague, partner",
    "example_es": "Mis compañeros de trabajo son muy amables.",
    "example_en": "My coworkers are very kind."
  },
  {
    "word": "asistente",
    "phonetics": "asisten̪ˈte",
    "part_of_speech": "noun",
    "meaning": "assistant",
    "example_es": "El asistente ayudó con la presentación.",
    "example_en": "The assistant helped with the presentation."
  },
  {
    "word": "directivo",
    "phonetics": "diɾekˈtiβo",
    "part_of_speech": "noun",
    "meaning": "executive",
    "example_es": "El directivo dio un discurso inspirador.",
    "example_en": "The executive gave an inspiring speech."
  },
  {
    "word": "congreso",
    "phonetics": "konˈɣɾeso",
    "part_of_speech": "noun",
    "meaning": "conference, congress",
    "example_es": "Asistimos a un congreso internacional.",
    "example_en": "We attended an international congress."
  },
  {
    "word": "seminario",
    "phonetics": "semiˈnaɾjo",
    "part_of_speech": "noun",
    "meaning": "seminar",
    "example_es": "El seminario trató sobre innovación tecnológica.",
    "example_en": "The seminar was about technological innovation."
  },
  {
    "word": "taller",
    "phonetics": "taˈʝeɾ",
    "part_of_speech": "noun",
    "meaning": "workshop",
    "example_es": "Participé en un taller de liderazgo.",
    "example_en": "I participated in a leadership workshop."
  },
  {
    "word": "curso",
    "phonetics": "ˈkuɾso",
    "part_of_speech": "noun",
    "meaning": "course",
    "example_es": "Hice un curso de programación en línea.",
    "example_en": "I took an online programming course."
  },
  {
    "word": "formación",
    "phonetics": "foɾmaˈθjon",
    "part_of_speech": "noun",
    "meaning": "training, education",
    "example_es": "La empresa ofrece formación continua.",
    "example_en": "The company offers continuous training."
  },
  {
    "word": "evaluación",
    "phonetics": "eβaluaˈθjon",
    "part_of_speech": "noun",
    "meaning": "evaluation",
    "example_es": "Realizamos una evaluación de desempeño.",
    "example_en": "We carried out a performance evaluation."
  },
  {
    "word": "desempeño",
    "phonetics": "desemˈpeɲo",
    "part_of_speech": "noun",
    "meaning": "performance",
    "example_es": "El desempeño del equipo fue excelente.",
    "example_en": "The team’s performance was excellent."
  },
  {
    "word": "objetividad",
    "phonetics": "oβxe.tiβiˈðað",
    "part_of_speech": "noun",
    "meaning": "objectivity",
    "example_es": "La objetividad es importante en un informe.",
    "example_en": "Objectivity is important in a report."
  },
  {
    "word": "creatividad",
    "phonetics": "kɾeatiβiˈðað",
    "part_of_speech": "noun",
    "meaning": "creativity",
    "example_es": "La creatividad impulsa la innovación.",
    "example_en": "Creativity drives innovation."
  },
  {
    "word": "innovación",
    "phonetics": "innoβaˈθjon",
    "part_of_speech": "noun",
    "meaning": "innovation",
    "example_es": "La innovación tecnológica cambia la manera de trabajar.",
    "example_en": "Technological innovation changes the way we work."
  },
  {
    "word": "estratega",
    "phonetics": "estɾaˈtexa",
    "part_of_speech": "noun",
    "meaning": "strategist",
    "example_es": "Es un buen estratega en los negocios.",
    "example_en": "He is a good strategist in business."
  },
  {
    "word": "plan",
    "phonetics": "plan",
    "part_of_speech": "noun",
    "meaning": "plan",
    "example_es": "Tienen un plan de expansión a largo plazo.",
    "example_en": "They have a long-term expansion plan."
  },
  {
    "word": "objetivo común",
    "phonetics": "oβxeˈtiβo koˈmun",
    "part_of_speech": "noun phrase",
    "meaning": "common goal",
    "example_es": "Trabajamos por un objetivo común.",
    "example_en": "We work towards a common goal."
  },
  {
    "word": "colaborar",
    "phonetics": "kolaboˈɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to collaborate",
    "example_es": "Ellos van a colaborar en el nuevo proyecto.",
    "example_en": "They are going to collaborate on the new project."
  },
  {
    "word": "competir",
    "phonetics": "kompeˈtiɾ",
    "part_of_speech": "verb",
    "meaning": "to compete",
    "example_es": "Las empresas deben competir en el mercado.",
    "example_en": "Companies must compete in the market."
  },
  {
    "word": "ganancia",
    "phonetics": "ɡaˈnanθja",
    "part_of_speech": "noun",
    "meaning": "profit, gain",
    "example_es": "La empresa obtuvo una gran ganancia.",
    "example_en": "The company made a big profit."
  },
  {
    "word": "perjuicio",
    "phonetics": "peɾˈxwisjo",
    "part_of_speech": "noun",
    "meaning": "damage, harm",
    "example_es": "El error causó un perjuicio económico.",
    "example_en": "The mistake caused financial harm."
  },
  {
    "word": "riesgoso",
    "phonetics": "rjesˈɣoso",
    "part_of_speech": "adjective",
    "meaning": "risky",
    "example_es": "Invertir en esa empresa es muy riesgoso.",
    "example_en": "Investing in that company is very risky."
  },
  {
    "word": "seguro",
    "phonetics": "seˈɣuɾo",
    "part_of_speech": "adjective",
    "meaning": "safe, insurance",
    "example_es": "Tenemos un plan de seguro médico.",
    "example_en": "We have a health insurance plan."
  },
  {
    "word": "eficaz",
    "phonetics": "efiˈkas",
    "part_of_speech": "adjective",
    "meaning": "effective",
    "example_es": "El plan de marketing fue muy eficaz.",
    "example_en": "The marketing plan was very effective."
  },
  {
    "word": "eficiente",
    "phonetics": "efisjente",
    "part_of_speech": "adjective",
    "meaning": "efficient",
    "example_es": "Este software es más eficiente que el anterior.",
    "example_en": "This software is more efficient than the previous one."
  },
  {
    "word": "costoso",
    "phonetics": "kosˈtoso",
    "part_of_speech": "adjective",
    "meaning": "expensive, costly",
    "example_es": "Este proyecto es demasiado costoso.",
    "example_en": "This project is too costly."
  },
  {
    "word": "barato",
    "phonetics": "baˈɾato",
    "part_of_speech": "adjective",
    "meaning": "cheap",
    "example_es": "El producto resultó ser barato y útil.",
    "example_en": "The product turned out to be cheap and useful."
  },
  {
    "word": "competente",
    "phonetics": "kompeˈtente",
    "part_of_speech": "adjective",
    "meaning": "competent",
    "example_es": "El abogado es muy competente.",
    "example_en": "The lawyer is very competent."
  },
  {
    "word": "efectivo",
    "phonetics": "efekˈtiβo",
    "part_of_speech": "noun/adjective",
    "meaning": "cash / effective",
    "example_es": "Pagamos en efectivo.",
    "example_en": "We paid in cash."
  },
  {
    "word": "moneda",
    "phonetics": "moˈneða",
    "part_of_speech": "noun",
    "meaning": "currency, coin",
    "example_es": "El euro es la moneda oficial en España.",
    "example_en": "The euro is the official currency in Spain."
  },
  {
    "word": "billete",
    "phonetics": "biˈʝete",
    "part_of_speech": "noun",
    "meaning": "ticket, bill (money)",
    "example_es": "Compré un billete de avión.",
    "example_en": "I bought a plane ticket."
  },
  {
    "word": "caja registradora",
    "phonetics": "ˈkaxa rexisˈtɾadoɾa",
    "part_of_speech": "noun phrase",
    "meaning": "cash register",
    "example_es": "La caja registradora no funciona.",
    "example_en": "The cash register is not working."
  },
  {
    "word": "competitividad",
    "phonetics": "kompetitiβiˈðað",
    "part_of_speech": "noun",
    "meaning": "competitiveness",
    "example_es": "La competitividad del mercado es muy alta.",
    "example_en": "The competitiveness of the market is very high."
  },
  {
    "word": "mercancías",
    "phonetics": "meɾkanˈθi.as",
    "part_of_speech": "noun",
    "meaning": "goods, merchandise",
    "example_es": "Las mercancías fueron exportadas a Asia.",
    "example_en": "The goods were exported to Asia."
  },
  {
    "word": "aduana",
    "phonetics": "aˈðwana",
    "part_of_speech": "noun",
    "meaning": "customs (border control)",
    "example_es": "La aduana revisó todos los documentos.",
    "example_en": "Customs checked all the documents."
  },
  {
    "word": "arancel",
    "phonetics": "aɾanˈθel",
    "part_of_speech": "noun",
    "meaning": "tariff, duty",
    "example_es": "El gobierno impuso un nuevo arancel.",
    "example_en": "The government imposed a new tariff."
  },
  {
    "word": "importador",
    "phonetics": "impoɾtaˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "importer",
    "example_es": "El importador consiguió una licencia especial.",
    "example_en": "The importer obtained a special license."
  },
  {
    "word": "exportador",
    "phonetics": "eksportaˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "exporter",
    "example_es": "España es exportador de vino.",
    "example_en": "Spain is an exporter of wine."
  },
  {
    "word": "aduanero",
    "phonetics": "aˈðwaneɾo",
    "part_of_speech": "adjective",
    "meaning": "customs-related",
    "example_es": "El proceso aduanero fue rápido.",
    "example_en": "The customs process was fast."
  },
  {
    "word": "legalizar",
    "phonetics": "leɣaliˈθaɾ",
    "part_of_speech": "verb",
    "meaning": "to legalize",
    "example_es": "Necesitamos legalizar los documentos.",
    "example_en": "We need to legalize the documents."
  },
  {
    "word": "registrar",
    "phonetics": "reχisˈtɾaɾ",
    "part_of_speech": "verb",
    "meaning": "to register",
    "example_es": "Tienes que registrar tu marca comercial.",
    "example_en": "You have to register your trademark."
  },
  {
    "word": "notificar",
    "phonetics": "notifikaɾ",
    "part_of_speech": "verb",
    "meaning": "to notify",
    "example_es": "La empresa debe notificar cualquier cambio.",
    "example_en": "The company must notify about any change."
  },
  {
    "word": "denunciar",
    "phonetics": "denunˈsjaɾ",
    "part_of_speech": "verb",
    "meaning": "to report, to denounce",
    "example_es": "Decidió denunciar el fraude a la policía.",
    "example_en": "He decided to report the fraud to the police."
  },
  {
    "word": "acuerdo",
    "phonetics": "aˈkweɾðo",
    "part_of_speech": "noun",
    "meaning": "agreement, deal",
    "example_es": "Firmaron un acuerdo entre las dos empresas.",
    "example_en": "They signed an agreement between the two companies."
  },
  {
    "word": "alianza",
    "phonetics": "aˈljanθa",
    "part_of_speech": "noun",
    "meaning": "alliance",
    "example_es": "Formaron una alianza estratégica.",
    "example_en": "They formed a strategic alliance."
  },
  {
    "word": "colaborativo",
    "phonetics": "kolaboɾaˈtiβo",
    "part_of_speech": "adjective",
    "meaning": "collaborative",
    "example_es": "El trabajo colaborativo mejora los resultados.",
    "example_en": "Collaborative work improves results."
  },
  {
    "word": "individual",
    "phonetics": "indiβiˈðwal",
    "part_of_speech": "adjective",
    "meaning": "individual",
    "example_es": "Cada socio tiene una responsabilidad individual.",
    "example_en": "Each partner has an individual responsibility."
  },
  {
    "word": "colectivo",
    "phonetics": "kolehˈtiβo",
    "part_of_speech": "adjective",
    "meaning": "collective",
    "example_es": "La decisión fue un esfuerzo colectivo.",
    "example_en": "The decision was a collective effort."
  },
  {
    "word": "recurso humano",
    "phonetics": "reˈkuɾso uˈmano",
    "part_of_speech": "noun phrase",
    "meaning": "human resource",
    "example_es": "El área de recursos humanos contrató nuevo personal.",
    "example_en": "The human resources department hired new staff."
  },
  {
    "word": "departamento",
    "phonetics": "depaɾtaˈmento",
    "part_of_speech": "noun",
    "meaning": "department",
    "example_es": "Trabajo en el departamento de ventas.",
    "example_en": "I work in the sales department."
  },
  {
    "word": "sección",
    "phonetics": "sekˈθjon",
    "part_of_speech": "noun",
    "meaning": "section",
    "example_es": "Esa sección de la tienda está cerrada.",
    "example_en": "That section of the store is closed."
  },
  {
    "word": "división",
    "phonetics": "diβiˈsjon",
    "part_of_speech": "noun",
    "meaning": "division",
    "example_es": "Nuestra división de tecnología creció mucho.",
    "example_en": "Our technology division grew a lot."
  },
  {
    "word": "empresa multinacional",
    "phonetics": "emˈpɾesa multinasjoˈnal",
    "part_of_speech": "noun phrase",
    "meaning": "multinational company",
    "example_es": "La empresa multinacional tiene oficinas en 20 países.",
    "example_en": "The multinational company has offices in 20 countries."
  },
  {
    "word": "sucursal",
    "phonetics": "sukuɾˈsal",
    "part_of_speech": "noun",
    "meaning": "branch (of a company or bank)",
    "example_es": "La sucursal abrirá a las nueve.",
    "example_en": "The branch will open at nine."
  },
  {
    "word": "competidor",
    "phonetics": "kompe.tiˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "competitor",
    "example_es": "El competidor presentó una nueva oferta.",
    "example_en": "The competitor presented a new offer."
  },
  {
    "word": "emprendedor",
    "phonetics": "empɾenðeˈðoɾ",
    "part_of_speech": "noun",
    "meaning": "entrepreneur",
    "example_es": "El emprendedor fundó una startup innovadora.",
    "example_en": "The entrepreneur founded an innovative startup."
  },
  {
    "word": "startup",
    "phonetics": "ˈstaɾ.tʌp",
    "part_of_speech": "noun",
    "meaning": "startup company",
    "example_es": "La startup consiguió financiamiento extranjero.",
    "example_en": "The startup obtained foreign funding."
  },
  {
    "word": "financiamiento",
    "phonetics": "finansjaˈmjento",
    "part_of_speech": "noun",
    "meaning": "funding, financing",
    "example_es": "El financiamiento fue aprobado por el banco.",
    "example_en": "The financing was approved by the bank."
  },
  {
    "word": "capital",
    "phonetics": "kapiˈtal",
    "part_of_speech": "noun",
    "meaning": "capital (money, finance)",
    "example_es": "Necesitamos más capital para expandir la marca.",
    "example_en": "We need more capital to expand the brand."
  },
  {
    "word": "fondo",
    "phonetics": "ˈfondo",
    "part_of_speech": "noun",
    "meaning": "fund, background, bottom",
    "example_es": "El fondo de inversiones creció un 10%.",
    "example_en": "The investment fund grew by 10%."
  },
  {
    "word": "beneficiario",
    "phonetics": "bene.fiˈθjaɾjo",
    "part_of_speech": "noun",
    "meaning": "beneficiary",
    "example_es": "El beneficiario recibirá el pago en junio.",
    "example_en": "The beneficiary will receive the payment in June."
  },
  {
    "word": "accionista",
    "phonetics": "akθjoˈnista",
    "part_of_speech": "noun",
    "meaning": "shareholder",
    "example_es": "Los accionistas aprobaron la propuesta.",
    "example_en": "The shareholders approved the proposal."
  },
  {
    "word": "inversor",
    "phonetics": "inbeɾˈsoɾ",
    "part_of_speech": "noun",
    "meaning": "investor",
    "example_es": "El inversor está interesado en la empresa.",
    "example_en": "The investor is interested in the company."
  },
  {
    "word": "socios",
    "phonetics": "ˈso.sjos",
    "part_of_speech": "noun",
    "meaning": "partners, associates",
    "example_es": "Los socios decidieron dividir las ganancias.",
    "example_en": "The partners decided to split the profits."
  },
  {
    "word": "fusionar",
    "phonetics": "fusjoˈnaɾ",
    "part_of_speech": "verb",
    "meaning": "to merge",
    "example_es": "Las dos compañías van a fusionar sus operaciones.",
    "example_en": "The two companies are going to merge their operations."
  },
  {
    "word": "adquisición",
    "phonetics": "aðkisiˈθjon",
    "part_of_speech": "noun",
    "meaning": "acquisition",
    "example_es": "La adquisición fue muy costosa.",
    "example_en": "The acquisition was very expensive."
  }
];