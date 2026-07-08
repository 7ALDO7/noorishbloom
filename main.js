// Sticky navbar on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("sticky", window.scrollY > 20);
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn?.addEventListener("click", () => {
  const isOpen = menu?.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu?.classList.remove("active");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// Continue-shopping dynamic URL for PayPal forms
function getContinueShoppingURL(form) {
  const shoppingUrlInput = form.querySelector('input[name="shopping_url"]');

  if (shoppingUrlInput) {
    shoppingUrlInput.value = window.location.href;
  }
}

// Attach to all PayPal add-to-cart forms
document.querySelectorAll(".paypal-addtocart").forEach((form) => {
  form.addEventListener("submit", (event) => {
    getContinueShoppingURL(event.target);
  });
});

// Scroll reveal animation
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

// Ritual product selector
const ritualTabs = document.querySelectorAll(".ritual-tab");
const ritualPanels = document.querySelectorAll(".ritual-panel");

ritualTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedRitual = tab.dataset.ritual;

    ritualTabs.forEach((item) => item.classList.remove("active"));
    ritualPanels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");

    const activePanel = document.getElementById(`ritual-${selectedRitual}`);

    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});

// Language selector and translation
const languages = {
  en: {
    locale: "en-US",
    flag: "🇺🇸",
    label: "English",
    translations: {
      "nav.home": "Home",
      "nav.promise": "Promise",
      "nav.products": "Products",
      "nav.ritual": "Ritual",
      "nav.connect": "Connect",
      "cart.viewTitle": "View PayPal cart",

      "hero.eyebrow": "Natural Botanical Hair Care",
      "hero.heading": "Nourish your roots. Bloom through every strand.",
      "hero.copy": "Hydrating and strengthening botanical hair care crafted to cleanse, soften, condition, and support healthy-looking hair from scalp to ends.",
      "hero.shop": "Shop Now",
      "hero.promise": "Our Promise",

      "trust.cruelty": "Cruelty Free",
      "trust.noDyes": "No Dyes & Parabens",
      "trust.noPhthalates": "No Phthalates",

      "values.oneTitle": "Botanical Infusions",
      "values.oneCopy": "Rosemary, cinnamon, cloves, and anise inspired blends for a refreshing hair-care ritual.",
      "values.twoTitle": "Clean Beauty Feel",
      "values.twoCopy": "Simple product values with no dyes, no parabens, no phthalates, and cruelty-free care.",
      "values.threeTitle": "Scalp-to-Strand Care",
      "values.threeCopy": "A complete routine made to cleanse, condition, nourish, and support healthier-looking hair.",

      "about.eyebrow": "Our Promise",
      "about.heading": "Good. Clean. Natural.",
      "about.copy1": "At Noorish & Bloom, clean haircare means simple, thoughtful ingredients made to support a gentle, nourishing routine. We start with a coconut-derived cleansing base enriched with aloe vera, argan oil, and bamboo extract, then infuse each small batch with signature botanicals.",
      "about.promise1": "100% Vegan & Cruelty-Free",
      "about.promise2": "Free from Sulfates, Parabens, Phthalates & Dyes",
      "about.promise3": "Ethically & Sustainably Sourced",
      "about.promise4": "Infused with Rosemary, Cinnamon, Cloves & Anise",
      "about.copy2": "No compromises. Just clean, hydrated, naturally nourished hair.",
      "about.startingAt": "Starting At",

      "products.eyebrow": "The Collection",
      "products.heading": "Shop by Formula",
      "products.intro": "Start with a botanical cleanse, follow with conditioning softness, choose the duo, or complete your ritual with scalp nourishment.",
      "products.shampooName": "Nourishing Shampoo",
      "products.shampooDesc": "Infused with rosemary, cinnamon, cloves, and anise for a fresh botanical cleanse.",
      "products.conditionerName": "Nourishing Conditioner",
      "products.conditionerDesc": "Made to soften, smooth, and help hair feel more manageable after every wash.",
      "products.bundleName": "Nourishing Duo Bundle",
      "products.bundleDesc": "The complete wash-day pair for cleansing, conditioning, softness, and shine.",
      "products.oilName": "Fortifying Hair & Scalp Oil",
      "products.oilDesc": "A rich oil blend with castor, rosemary, oregano, and batana oils for scalp nourishment and shine.",

      "ritual.eyebrow": "The Ritual",
      "ritual.heading": "Choose Your Product Ritual",
      "ritual.intro": "Select a Noorish & Bloom product below to see how it fits into your clean botanical routine.",
      "ritual.tabShampoo": "Shampoo",
      "ritual.tabConditioner": "Conditioner",
      "ritual.tabOil": "Hair & Scalp Oil",

      "ritual.shampooStep": "Step 01",
      "ritual.shampooTitle": "Nourishing Shampoo",
      "ritual.shampooCopy": "Begin with wet hair. Apply shampoo to the scalp and roots, gently massage into a lather, then rinse thoroughly. Follow with Noorish & Bloom conditioner for softness and manageability.",
      "ritual.shampooLi1": "Gently cleanses the scalp and hair",
      "ritual.shampooLi2": "Helps hair feel refreshed and lightweight",
      "ritual.shampooLi3": "Infused with rosemary, cinnamon, cloves, and anise",
      "ritual.shopShampoo": "Shop Shampoo",

      "ritual.conditionerStep": "Step 02",
      "ritual.conditionerTitle": "Nourishing Conditioner",
      "ritual.conditionerCopy": "After shampooing, apply conditioner from mid-lengths to ends. Let it soften the hair, then rinse thoroughly for a smoother, more manageable finish.",
      "ritual.conditionerLi1": "Helps soften and smooth strands",
      "ritual.conditionerLi2": "Supports easier detangling",
      "ritual.conditionerLi3": "Leaves hair feeling nourished and manageable",
      "ritual.shopConditioner": "Shop Conditioner",

      "ritual.oilStep": "Step 03",
      "ritual.oilTitle": "Fortifying Hair & Scalp Oil",
      "ritual.oilCopy": "Apply a small amount directly to the scalp and massage gently for 3–5 minutes. Use 2–3 times per week or as needed. For a pre-wash deep-care ritual, apply to the scalp and hair, leave on for 30–60 minutes, then wash thoroughly. For dry ends, smooth a small amount over the ends of the hair.",
      "ritual.oilLi1": "Made with castor oil, rosemary oil, oregano oil, and batana oil",
      "ritual.oilLi2": "Nourishes dry-feeling scalp and supports a softer feel",
      "ritual.oilLi3": "Helps improve the appearance of shine, softness, and fuller-looking hair",
      "ritual.oilLi4": "Perform a patch test before first use and avoid contact with eyes",
      "ritual.shopOil": "Shop Hair Oil",

      "social.badge": "Don’t Forget",
      "social.heading": "Visit Our Socials",
      "social.copy": "We’d love to connect with you.",

      "footer.copyright": "© 2025 Noorish & Bloom. All rights reserved.",
      "footer.note": "Natural Botanical Hair Care • Cruelty Free • No Dyes & Parabens • No Phthalates",
      "footer.newsletter": "Join Our Newsletter",
      "footer.newsletterCopy": "Get exclusive offers and haircare tips.",
      "footer.emailPlaceholder": "Enter your email",
      "footer.subscribe": "Subscribe"
    }
  },

  es: {
    locale: "es-MX",
    flag: "🇲🇽",
    label: "Español",
    translations: {
      "nav.home": "Inicio",
      "nav.promise": "Promesa",
      "nav.products": "Productos",
      "nav.ritual": "Ritual",
      "nav.connect": "Conectar",
      "cart.viewTitle": "Ver carrito de PayPal",

      "hero.eyebrow": "Cuidado Capilar Botánico Natural",
      "hero.heading": "Nutre tus raíces. Florece en cada hebra.",
      "hero.copy": "Cuidado capilar botánico hidratante y fortalecedor creado para limpiar, suavizar, acondicionar y apoyar un cabello de aspecto saludable desde el cuero cabelludo hasta las puntas.",
      "hero.shop": "Comprar Ahora",
      "hero.promise": "Nuestra Promesa",

      "trust.cruelty": "Libre de Crueldad",
      "trust.noDyes": "Sin Colorantes ni Parabenos",
      "trust.noPhthalates": "Sin Ftalatos",

      "values.oneTitle": "Infusiones Botánicas",
      "values.oneCopy": "Mezclas inspiradas en romero, canela, clavo y anís para un ritual capilar refrescante.",
      "values.twoTitle": "Sensación de Belleza Limpia",
      "values.twoCopy": "Valores sencillos: sin colorantes, sin parabenos, sin ftalatos y con cuidado libre de crueldad.",
      "values.threeTitle": "Cuidado del Cuero Cabelludo a las Puntas",
      "values.threeCopy": "Una rutina completa para limpiar, acondicionar, nutrir y apoyar un cabello de aspecto más saludable.",

      "about.eyebrow": "Nuestra Promesa",
      "about.heading": "Bueno. Limpio. Natural.",
      "about.copy1": "En Noorish & Bloom, el cuidado capilar limpio significa ingredientes simples y cuidadosamente seleccionados para apoyar una rutina suave y nutritiva. Comenzamos con una base limpiadora derivada del coco enriquecida con aloe vera, aceite de argán y extracto de bambú, y luego infusionamos cada lote pequeño con botánicos distintivos.",
      "about.promise1": "100% Vegano y Libre de Crueldad",
      "about.promise2": "Libre de Sulfatos, Parabenos, Ftalatos y Colorantes",
      "about.promise3": "Obtenido de Forma Ética y Sostenible",
      "about.promise4": "Infundido con Romero, Canela, Clavo y Anís",
      "about.copy2": "Sin compromisos. Solo cabello limpio, hidratado y naturalmente nutrido.",
      "about.startingAt": "Desde",

      "products.eyebrow": "La Colección",
      "products.heading": "Compra por Fórmula",
      "products.intro": "Comienza con una limpieza botánica, continúa con suavidad acondicionadora, elige el dúo o completa tu ritual con nutrición para el cuero cabelludo.",
      "products.shampooName": "Shampoo Nutritivo",
      "products.shampooDesc": "Infundido con romero, canela, clavo y anís para una limpieza botánica fresca.",
      "products.conditionerName": "Acondicionador Nutritivo",
      "products.conditionerDesc": "Diseñado para suavizar, alisar y ayudar a que el cabello se sienta más manejable después de cada lavado.",
      "products.bundleName": "Dúo Nutritivo",
      "products.bundleDesc": "El par completo para el día de lavado: limpieza, acondicionamiento, suavidad y brillo.",
      "products.oilName": "Aceite Fortalecedor para Cabello y Cuero Cabelludo",
      "products.oilDesc": "Una rica mezcla de aceites de ricino, romero, orégano y batana para nutrir el cuero cabelludo y aportar brillo.",

      "ritual.eyebrow": "El Ritual",
      "ritual.heading": "Elige Tu Ritual por Producto",
      "ritual.intro": "Selecciona un producto Noorish & Bloom para ver cómo encaja en tu rutina botánica limpia.",
      "ritual.tabShampoo": "Shampoo",
      "ritual.tabConditioner": "Acondicionador",
      "ritual.tabOil": "Aceite Capilar",

      "ritual.shampooStep": "Paso 01",
      "ritual.shampooTitle": "Shampoo Nutritivo",
      "ritual.shampooCopy": "Comienza con el cabello mojado. Aplica el shampoo en el cuero cabelludo y las raíces, masajea suavemente hasta formar espuma y enjuaga bien. Continúa con el acondicionador Noorish & Bloom para suavidad y manejabilidad.",
      "ritual.shampooLi1": "Limpia suavemente el cuero cabelludo y el cabello",
      "ritual.shampooLi2": "Ayuda a que el cabello se sienta fresco y ligero",
      "ritual.shampooLi3": "Infundido con romero, canela, clavo y anís",
      "ritual.shopShampoo": "Comprar Shampoo",

      "ritual.conditionerStep": "Paso 02",
      "ritual.conditionerTitle": "Acondicionador Nutritivo",
      "ritual.conditionerCopy": "Después del shampoo, aplica el acondicionador de medios a puntas. Déjalo suavizar el cabello y enjuaga bien para un acabado más liso y manejable.",
      "ritual.conditionerLi1": "Ayuda a suavizar y alisar las hebras",
      "ritual.conditionerLi2": "Apoya un desenredado más fácil",
      "ritual.conditionerLi3": "Deja el cabello con sensación nutrida y manejable",
      "ritual.shopConditioner": "Comprar Acondicionador",

      "ritual.oilStep": "Paso 03",
      "ritual.oilTitle": "Aceite Fortalecedor para Cabello y Cuero Cabelludo",
      "ritual.oilCopy": "Aplica una pequeña cantidad directamente sobre el cuero cabelludo y masajea suavemente durante 3–5 minutos. Úsalo 2–3 veces por semana o según sea necesario. Para un ritual profundo antes del lavado, aplícalo en el cuero cabelludo y el cabello, déjalo actuar de 30–60 minutos y luego lava bien. Para puntas secas, alisa una pequeña cantidad sobre las puntas del cabello.",
      "ritual.oilLi1": "Elaborado con aceite de ricino, aceite de romero, aceite de orégano y aceite de batana",
      "ritual.oilLi2": "Nutre el cuero cabelludo con sensación de resequedad y apoya una sensación más suave",
      "ritual.oilLi3": "Ayuda a mejorar la apariencia del brillo, la suavidad y un cabello con aspecto más abundante",
      "ritual.oilLi4": "Realiza una prueba de parche antes del primer uso y evita el contacto con los ojos",
      "ritual.shopOil": "Comprar Aceite Capilar",

      "social.badge": "No Olvides",
      "social.heading": "Visita Nuestras Redes",
      "social.copy": "Nos encantaría conectar contigo.",

      "footer.copyright": "© 2025 Noorish & Bloom. Todos los derechos reservados.",
      "footer.note": "Cuidado Capilar Botánico Natural • Libre de Crueldad • Sin Colorantes ni Parabenos • Sin Ftalatos",
      "footer.newsletter": "Únete a Nuestro Boletín",
      "footer.newsletterCopy": "Recibe ofertas exclusivas y consejos de cuidado capilar.",
      "footer.emailPlaceholder": "Ingresa tu correo electrónico",
      "footer.subscribe": "Suscribirse"
    }
  },

  fr: {
    locale: "fr-FR",
    flag: "🇫🇷",
    label: "Français",
    translations: {
      "nav.home": "Accueil",
      "nav.promise": "Promesse",
      "nav.products": "Produits",
      "nav.ritual": "Rituel",
      "nav.connect": "Contact",
      "cart.viewTitle": "Voir le panier PayPal",

      "hero.eyebrow": "Soin Capillaire Botanique Naturel",
      "hero.heading": "Nourrissez vos racines. Épanouissez chaque mèche.",
      "hero.copy": "Un soin capillaire botanique hydratant et fortifiant conçu pour nettoyer, adoucir, conditionner et favoriser l’apparence de cheveux sains, du cuir chevelu aux pointes.",
      "hero.shop": "Acheter",
      "hero.promise": "Notre Promesse",

      "trust.cruelty": "Sans Cruauté",
      "trust.noDyes": "Sans Colorants ni Parabènes",
      "trust.noPhthalates": "Sans Phtalates",

      "values.oneTitle": "Infusions Botaniques",
      "values.oneCopy": "Des mélanges inspirés du romarin, de la cannelle, du clou de girofle et de l’anis pour un rituel capillaire rafraîchissant.",
      "values.twoTitle": "Beauté Propre",
      "values.twoCopy": "Des valeurs simples : sans colorants, sans parabènes, sans phtalates et sans cruauté.",
      "values.threeTitle": "Du Cuir Chevelu aux Pointes",
      "values.threeCopy": "Une routine complète pour nettoyer, conditionner, nourrir et soutenir l’apparence de cheveux plus sains.",

      "about.eyebrow": "Notre Promesse",
      "about.heading": "Bon. Propre. Naturel.",
      "about.copy1": "Chez Noorish & Bloom, le soin capillaire propre signifie des ingrédients simples et réfléchis, conçus pour soutenir une routine douce et nourrissante. Nous commençons par une base nettoyante dérivée de la noix de coco enrichie en aloe vera, huile d’argan et extrait de bambou, puis nous infusons chaque petit lot avec des botaniques signature.",
      "about.promise1": "100 % Végane et Sans Cruauté",
      "about.promise2": "Sans Sulfates, Parabènes, Phtalates ni Colorants",
      "about.promise3": "Sources Éthiques et Durables",
      "about.promise4": "Infusé avec Romarin, Cannelle, Clou de Girofle et Anis",
      "about.copy2": "Aucun compromis. Seulement des cheveux propres, hydratés et naturellement nourris.",
      "about.startingAt": "À Partir De",

      "products.eyebrow": "La Collection",
      "products.heading": "Acheter par Formule",
      "products.intro": "Commencez par un nettoyage botanique, poursuivez avec une douceur conditionnante, choisissez le duo ou complétez votre rituel avec une nutrition du cuir chevelu.",
      "products.shampooName": "Shampooing Nourrissant",
      "products.shampooDesc": "Infusé avec romarin, cannelle, clou de girofle et anis pour un nettoyage botanique frais.",
      "products.conditionerName": "Après-Shampooing Nourrissant",
      "products.conditionerDesc": "Conçu pour adoucir, lisser et aider les cheveux à être plus faciles à coiffer après chaque lavage.",
      "products.bundleName": "Duo Nourrissant",
      "products.bundleDesc": "Le duo complet du jour de lavage pour nettoyer, conditionner, apporter douceur et brillance.",
      "products.oilName": "Huile Fortifiante Cheveux et Cuir Chevelu",
      "products.oilDesc": "Un riche mélange d’huiles de ricin, romarin, origan et batana pour nourrir le cuir chevelu et apporter de la brillance.",

      "ritual.eyebrow": "Le Rituel",
      "ritual.heading": "Choisissez Votre Rituel Produit",
      "ritual.intro": "Sélectionnez un produit Noorish & Bloom pour voir comment il s’intègre à votre routine botanique propre.",
      "ritual.tabShampoo": "Shampooing",
      "ritual.tabConditioner": "Après-Shampooing",
      "ritual.tabOil": "Huile Capillaire",

      "ritual.shampooStep": "Étape 01",
      "ritual.shampooTitle": "Shampooing Nourrissant",
      "ritual.shampooCopy": "Commencez sur cheveux mouillés. Appliquez le shampooing sur le cuir chevelu et les racines, massez doucement pour faire mousser, puis rincez abondamment. Poursuivez avec l’après-shampooing Noorish & Bloom pour plus de douceur et de facilité de coiffage.",
      "ritual.shampooLi1": "Nettoie en douceur le cuir chevelu et les cheveux",
      "ritual.shampooLi2": "Aide les cheveux à se sentir frais et légers",
      "ritual.shampooLi3": "Infusé avec romarin, cannelle, clou de girofle et anis",
      "ritual.shopShampoo": "Acheter le Shampooing",

      "ritual.conditionerStep": "Étape 02",
      "ritual.conditionerTitle": "Après-Shampooing Nourrissant",
      "ritual.conditionerCopy": "Après le shampooing, appliquez l’après-shampooing des mi-longueurs aux pointes. Laissez-le adoucir les cheveux, puis rincez abondamment pour un fini plus lisse et plus facile à coiffer.",
      "ritual.conditionerLi1": "Aide à adoucir et lisser les mèches",
      "ritual.conditionerLi2": "Aide au démêlage",
      "ritual.conditionerLi3": "Laisse les cheveux nourris et plus faciles à coiffer",
      "ritual.shopConditioner": "Acheter l’Après-Shampooing",

      "ritual.oilStep": "Étape 03",
      "ritual.oilTitle": "Huile Fortifiante Cheveux et Cuir Chevelu",
      "ritual.oilCopy": "Appliquez une petite quantité directement sur le cuir chevelu et massez doucement pendant 3 à 5 minutes. Utilisez 2 à 3 fois par semaine ou selon les besoins. Pour un rituel profond avant le lavage, appliquez sur le cuir chevelu et les cheveux, laissez poser 30 à 60 minutes, puis lavez soigneusement. Pour les pointes sèches, lissez une petite quantité sur les pointes.",
      "ritual.oilLi1": "Formulée avec de l’huile de ricin, de romarin, d’origan et de batana",
      "ritual.oilLi2": "Nourrit le cuir chevelu qui semble sec et apporte une sensation plus douce",
      "ritual.oilLi3": "Aide à améliorer l’apparence de la brillance, de la douceur et de cheveux plus denses",
      "ritual.oilLi4": "Effectuez un test cutané avant la première utilisation et évitez le contact avec les yeux",
      "ritual.shopOil": "Acheter l’Huile Capillaire",

      "social.badge": "N’oubliez Pas",
      "social.heading": "Visitez Nos Réseaux",
      "social.copy": "Nous serions ravis d’échanger avec vous.",

      "footer.copyright": "© 2025 Noorish & Bloom. Tous droits réservés.",
      "footer.note": "Soin Capillaire Botanique Naturel • Sans Cruauté • Sans Colorants ni Parabènes • Sans Phtalates",
      "footer.newsletter": "Rejoignez Notre Infolettre",
      "footer.newsletterCopy": "Recevez des offres exclusives et des conseils capillaires.",
      "footer.emailPlaceholder": "Entrez votre e-mail",
      "footer.subscribe": "S’abonner"
    }
  },

  de: {
    locale: "de-DE",
    flag: "🇩🇪",
    label: "Deutsch",
    translations: {
      "nav.home": "Start",
      "nav.promise": "Versprechen",
      "nav.products": "Produkte",
      "nav.ritual": "Ritual",
      "nav.connect": "Kontakt",
      "cart.viewTitle": "PayPal-Warenkorb anzeigen",

      "hero.eyebrow": "Natürliche Botanische Haarpflege",
      "hero.heading": "Nähre deine Wurzeln. Lass jede Strähne aufblühen.",
      "hero.copy": "Feuchtigkeitsspendende und stärkende botanische Haarpflege, entwickelt zum Reinigen, Weichmachen, Pflegen und zur Unterstützung gesund aussehender Haare vom Ansatz bis in die Spitzen.",
      "hero.shop": "Jetzt Kaufen",
      "hero.promise": "Unser Versprechen",

      "trust.cruelty": "Tierversuchsfrei",
      "trust.noDyes": "Ohne Farbstoffe & Parabene",
      "trust.noPhthalates": "Ohne Phthalate",

      "values.oneTitle": "Botanische Infusionen",
      "values.oneCopy": "Von Rosmarin, Zimt, Nelken und Anis inspirierte Mischungen für ein erfrischendes Haarpflegeritual.",
      "values.twoTitle": "Clean-Beauty-Gefühl",
      "values.twoCopy": "Klare Produktwerte: ohne Farbstoffe, ohne Parabene, ohne Phthalate und tierversuchsfrei.",
      "values.threeTitle": "Pflege von Kopfhaut bis Spitzen",
      "values.threeCopy": "Eine vollständige Routine zum Reinigen, Pflegen, Nähren und zur Unterstützung gesünder aussehender Haare.",

      "about.eyebrow": "Unser Versprechen",
      "about.heading": "Gut. Rein. Natürlich.",
      "about.copy1": "Bei Noorish & Bloom bedeutet reine Haarpflege einfache, sorgfältig ausgewählte Inhaltsstoffe, die eine sanfte und nährende Routine unterstützen. Wir beginnen mit einer kokosbasierten Reinigungsgrundlage, angereichert mit Aloe Vera, Arganöl und Bambusextrakt, und verfeinern jede kleine Charge mit charakteristischen Botanicals.",
      "about.promise1": "100 % Vegan und Tierversuchsfrei",
      "about.promise2": "Frei von Sulfaten, Parabenen, Phthalaten und Farbstoffen",
      "about.promise3": "Ethisch und Nachhaltig Bezogen",
      "about.promise4": "Mit Rosmarin, Zimt, Nelken und Anis Infundiert",
      "about.copy2": "Keine Kompromisse. Nur sauberes, hydratisiertes und natürlich genährtes Haar.",
      "about.startingAt": "Ab",

      "products.eyebrow": "Die Kollektion",
      "products.heading": "Nach Formel Kaufen",
      "products.intro": "Beginne mit einer botanischen Reinigung, folge mit pflegender Geschmeidigkeit, wähle das Duo oder vollende dein Ritual mit Kopfhautnährung.",
      "products.shampooName": "Nährendes Shampoo",
      "products.shampooDesc": "Mit Rosmarin, Zimt, Nelken und Anis für eine frische botanische Reinigung.",
      "products.conditionerName": "Nährender Conditioner",
      "products.conditionerDesc": "Entwickelt, um das Haar nach jeder Wäsche weicher, glatter und leichter kämmbar wirken zu lassen.",
      "products.bundleName": "Nährendes Duo",
      "products.bundleDesc": "Das komplette Wash-Day-Paar für Reinigung, Pflege, Geschmeidigkeit und Glanz.",
      "products.oilName": "Stärkendes Haar- & Kopfhautöl",
      "products.oilDesc": "Eine reichhaltige Ölmischung mit Rizinus-, Rosmarin-, Oregano- und Batanaöl für Kopfhautnährung und Glanz.",

      "ritual.eyebrow": "Das Ritual",
      "ritual.heading": "Wähle Dein Produkt-Ritual",
      "ritual.intro": "Wähle ein Noorish & Bloom Produkt aus und sieh, wie es in deine reine botanische Routine passt.",
      "ritual.tabShampoo": "Shampoo",
      "ritual.tabConditioner": "Conditioner",
      "ritual.tabOil": "Haar- & Kopfhautöl",

      "ritual.shampooStep": "Schritt 01",
      "ritual.shampooTitle": "Nährendes Shampoo",
      "ritual.shampooCopy": "Beginne mit nassem Haar. Trage das Shampoo auf Kopfhaut und Ansatz auf, massiere es sanft zu einem Schaum und spüle gründlich aus. Danach den Noorish & Bloom Conditioner für Geschmeidigkeit und Kämmbarkeit verwenden.",
      "ritual.shampooLi1": "Reinigt Kopfhaut und Haar sanft",
      "ritual.shampooLi2": "Hilft dem Haar, sich frisch und leicht anzufühlen",
      "ritual.shampooLi3": "Mit Rosmarin, Zimt, Nelken und Anis",
      "ritual.shopShampoo": "Shampoo Kaufen",

      "ritual.conditionerStep": "Schritt 02",
      "ritual.conditionerTitle": "Nährender Conditioner",
      "ritual.conditionerCopy": "Nach dem Shampoonieren den Conditioner von den Längen bis in die Spitzen auftragen. Kurz einwirken lassen und gründlich ausspülen, damit das Haar glatter und leichter kämmbar wirkt.",
      "ritual.conditionerLi1": "Hilft, die Strähnen weich und glatt wirken zu lassen",
      "ritual.conditionerLi2": "Unterstützt leichteres Entwirren",
      "ritual.conditionerLi3": "Hinterlässt ein genährtes und besser kämmbares Haargefühl",
      "ritual.shopConditioner": "Conditioner Kaufen",

      "ritual.oilStep": "Schritt 03",
      "ritual.oilTitle": "Stärkendes Haar- & Kopfhautöl",
      "ritual.oilCopy": "Eine kleine Menge direkt auf die Kopfhaut auftragen und 3–5 Minuten sanft einmassieren. 2–3 Mal pro Woche oder nach Bedarf verwenden. Für ein tiefenpflegendes Pre-Wash-Ritual auf Kopfhaut und Haar auftragen, 30–60 Minuten einwirken lassen und anschließend gründlich auswaschen. Für trockene Spitzen eine kleine Menge in die Haarspitzen geben.",
      "ritual.oilLi1": "Mit Rizinusöl, Rosmarinöl, Oreganoöl und Batanaöl",
      "ritual.oilLi2": "Nährt trocken wirkende Kopfhaut und unterstützt ein weicheres Gefühl",
      "ritual.oilLi3": "Hilft, das Erscheinungsbild von Glanz, Geschmeidigkeit und voller wirkendem Haar zu verbessern",
      "ritual.oilLi4": "Vor der ersten Anwendung einen Patch-Test durchführen und Augenkontakt vermeiden",
      "ritual.shopOil": "Haaröl Kaufen",

      "social.badge": "Nicht Vergessen",
      "social.heading": "Besuche Unsere Socials",
      "social.copy": "Wir freuen uns, mit dir in Kontakt zu bleiben.",

      "footer.copyright": "© 2025 Noorish & Bloom. Alle Rechte vorbehalten.",
      "footer.note": "Natürliche Botanische Haarpflege • Tierversuchsfrei • Ohne Farbstoffe & Parabene • Ohne Phthalate",
      "footer.newsletter": "Newsletter Abonnieren",
      "footer.newsletterCopy": "Erhalte exklusive Angebote und Haarpflegetipps.",
      "footer.emailPlaceholder": "E-Mail eingeben",
      "footer.subscribe": "Abonnieren"
    }
  }
};

const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");
const currentLangFlag = document.getElementById("currentLangFlag");
const currentLangLabel = document.getElementById("currentLangLabel");
const siteDate = document.getElementById("siteDate");
const languageOptions = document.querySelectorAll(".language-option");

function updateDate(langCode) {
  if (!siteDate || !languages[langCode]) return;

  const formatter = new Intl.DateTimeFormat(languages[langCode].locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  siteDate.textContent = formatter.format(new Date());
}

function applyTranslations(langCode) {
  const language = languages[langCode] || languages.en;
  const dictionary = language.translations;

  document.documentElement.lang = langCode;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-value]").forEach((element) => {
    const key = element.dataset.i18nValue;

    if (dictionary[key]) {
      element.value = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.dataset.i18nTitle;

    if (dictionary[key]) {
      element.setAttribute("title", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;

    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  if (currentLangFlag) currentLangFlag.textContent = language.flag;
  if (currentLangLabel) currentLangLabel.textContent = language.label;

  languageOptions.forEach((option) => {
    const isActive = option.dataset.lang === langCode;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

  updateDate(langCode);
  localStorage.setItem("noorishBloomLanguage", langCode);
}

languageToggle?.addEventListener("click", (event) => {
  event.stopPropagation();

  const isOpen = languageMenu?.classList.toggle("open");
  languageToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const langCode = option.dataset.lang || "en";

    applyTranslations(langCode);
    languageMenu?.classList.remove("open");
    languageToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof Element) || !target.closest(".language-picker")) {
    languageMenu?.classList.remove("open");
    languageToggle?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    languageMenu?.classList.remove("open");
    languageToggle?.setAttribute("aria-expanded", "false");
  }
});

const savedLanguage = localStorage.getItem("noorishBloomLanguage");
const browserLanguage = (navigator.language || "en").slice(0, 2);
const initialLanguage = savedLanguage || (languages[browserLanguage] ? browserLanguage : "en");

applyTranslations(initialLanguage);
