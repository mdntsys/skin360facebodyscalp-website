/**
 * Full service menus for Skin 360 Face Body Scalp, transcribed from the
 * clinic's official Face / Body / Scalp / Nails / Post-Cosmetic Surgery menus.
 * Rendered as semantic HTML so every treatment is indexable by search engines
 * and readable by AI agents (unlike the original PDF menus).
 */

export type Service = {
  name: string;
  price: string;
  duration?: string;
  description: string;
  includes?: string;
  note?: string;
};

export type ServiceGroup = {
  title?: string;
  intro?: string;
  services: Service[];
};

export type ServiceCategory = {
  slug: string;
  name: string;
  menuLabel: string;
  tagline: string;
  /** Short caption shown on the homepage pillar cards — matches the client's live site wording. */
  caption: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  groups: ServiceGroup[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "face",
    name: "Face",
    menuLabel: "Face",
    tagline: "Facials & advanced skin treatments",
    caption:
      "Facials: Personalized treatments targeting hydration, clarity, acne, and anti-aging.",
    heroDescription:
      "Personalized facials targeting hydration, clarity, acne, and anti-aging — from our Classic Facial to advanced DMK enzyme therapy, microcurrent sculpting, and non-invasive skin rejuvenation.",
    metaTitle: "Facials & Advanced Skin Treatments | Toluca Lake & Valencia",
    metaDescription:
      "Explore Skin 360's facial menu: Classic & Customized Facials, Cleopatra 24K Gold Facial, DMK Enzyme Therapy, microcurrent skin workouts, hydro-dermabrasion, Procell microchanneling, and more in Toluca Lake & Valencia, CA.",
    groups: [
      {
        services: [
          {
            name: "Classic Facial",
            price: "$145",
            duration: "55 Min",
            description:
              "Treat yourself with a luxury experience your skin will thank you for. A personalized treatment that focuses on a variety of skin concerns, providing immediate and lasting results, leaving your skin clean and luminous.",
            includes:
              "Double Cleanse · Skin Analysis · Exfoliation · Extractions · Massage · Masking (Hydrojelly Mask) · Serum · Moisturize · SPF",
          },
          {
            name: "Signature Customized Facial",
            price: "$295",
            duration: "90 Min",
            description:
              "Each session begins with a thorough skin analysis followed by a deep cleanse, a customized exfoliation treatment that is adjusted at every visit to continually improve and train your skin, and meticulous extractions performed with precision. The treatment is enhanced with our signature customized mask and concludes with LED light therapy to promote radiant, smooth, glowing skin. Your first appointment includes a personalized home-care sample kit and a complimentary customized add-on selected to address your skin's specific concerns and help extend the results of your treatment. As part of your initial experience, you'll also receive a complimentary 30-minute follow-up facial approximately seven days after your first treatment. This visit allows us to evaluate your skin's response, monitor your progress, and make any necessary adjustments to your treatment plan for optimal, long-lasting results.",
          },
          {
            name: "Cleopatra 24K Gold Facial",
            price: "$250",
            duration: "85 Min",
            description:
              "This luxurious treatment uses real 24K gold to nourish, firm, and illuminate the skin. Gold's revitalizing properties help boost circulation, support collagen production, and reduce inflammation, leaving your complexion smoother, brighter, and more radiant. Paired with deep cleansing, gentle exfoliation, and a hydrating massage, this facial delivers a rejuvenated glow fit for a queen.",
          },
          {
            name: "Skin Zero Gravity Face Treatment",
            price: "$450",
            duration: "75 Min",
            description:
              "Experience the future of non-invasive rejuvenation with our Dermotechnology-powered facial — an advanced treatment that uses synchronized microcurrents and electroporation to lift, tone, and revitalize the skin at a cellular level. This innovative French technology helps stimulate collagen and elastin production while enhancing the delivery of active serums for visibly firmer, smoother, and more radiant skin. By targeting over 40 facial muscles, it naturally sculpts and restores youthful contours with both immediate and cumulative results — all without pain, heat, needles, or downtime. Includes Face Roller, Silver Gloves, and Silver Mask. A non-invasive alternative to traditional injectable treatments and Botox.",
          },
          {
            name: "Facial Skin Workouts Treatment",
            price: "$250",
            duration: "45 Min",
            description:
              "This treatment includes a double cleanse, exfoliation, electroporation serum infusion and microcurrent facial workout, and finishing skincare products to tone facial muscles, boost circulation, and leave your skin feeling refreshed, lifted, and glowing.",
          },
          {
            name: "Derma Glow Facial",
            price: "$275",
            duration: "80 Min",
            description:
              "Elevate your skincare experience with our Derma Glow Facial, an advanced treatment that combines Bio-Therapeutic HydroDermabrasion with LED light therapy for radiant, healthy-looking skin. Using diamond-tip technology, this treatment gently exfoliates, deeply cleanses, extracts impurities, and infuses customized treatment solutions to improve hydration, texture, and overall skin health. This treatment is completed with LED light therapy to reduce inflammation, stimulate collagen production, and enhance your results. Ideal for treating dullness, congestion, dehydration, fine lines, and uneven skin texture, the Derma Glow Facial delivers an instantly smoother, brighter, and more refreshed complexion.",
          },
          {
            name: "DMK Skin Revision Enzyme Therapy",
            price: "$245",
            duration: "90 Min",
            description:
              "DMK Enzyme Therapy is a corrective, results-driven treatment designed to restore skin to optimal health. Using botanical-based enzymes, this facial works with your body's natural chemistry to stimulate circulation, boost oxygenation, and encourage lymphatic drainage. The signature “plasmatic effect” flushes fresh nutrients to the skin, helping to detoxify, firm, and strengthen the underlying structure. This treatment addresses concerns such as acne, pigmentation, rosacea, textured skin, and premature aging. Your skin is left clearer, brighter, and visibly lifted with improved function at a cellular level — making it one of the most effective professional therapies for long-term skin revision.",
          },
          {
            name: "DMK Skin Revision Muscle Banding",
            price: "$285",
            duration: "100 Min",
            description:
              "DMK Muscle Banding is a lifting and firming treatment designed to strengthen facial muscles and restore skin tightness. Using DMK's signature enzyme therapy, this treatment stimulates circulation, boosts collagen production, and works to contract and “re-educate” the underlying muscles. The result is firmer, tighter, more youthful-looking skin with improved elasticity and definition. It's an excellent option for preventative aging or for anyone wanting a natural, lifted appearance.",
          },
          {
            name: "DMK Skin Revision Stemzyme Bootcamp",
            price: "$1,595",
            duration: "100 Min",
            description:
              "DMK StemZyme treatment is a cutting-edge skincare treatment that focuses on the process of stem cell differentiation life cycle. Stem cells are the building blocks of the skin, and they play a critical role in the body's natural repair and regeneration processes. Over time (with aging), the population of epidermal stem cells in our skin declines — estimated around 10–15% fewer per decade. This is a 50-day program combining a series of professional in-clinic enzyme-based treatments (5 treatments total) with a home-prescriptive kit for maintenance.",
            note: "A $500 deposit is required to book this treatment.",
          },
          {
            name: "Procell Microchannel Therapy",
            price: "$350",
            duration: "80 Min",
            description:
              "A cutting-edge, non-invasive skin rejuvenation therapy that uses micro-channeling technology to stimulate the skin's natural healing process. Tiny, precise channels are created in the skin to promote collagen and elastin production, enhancing skin texture, firmness, and overall radiance. Ideal for reducing fine lines, wrinkles, and acne scars, and improving the absorption of serums for optimal results.",
          },
          {
            name: "TCA Chemical Peel",
            price: "$200+",
            description:
              "A TCA (Trichloroacetic Acid) chemical peel is a professional skin resurfacing treatment that helps improve fine lines, acne scars, sun damage, uneven skin tone, and dull texture. This treatment stimulates collagen production while revealing smoother, brighter, and healthier-looking skin. Peeling typically occurs over several days as fresh new skin emerges. Treatments are customized to your skin's needs.",
            note: "Please contact us for a free consultation.",
          },
          {
            name: "Jet Plasma Pen",
            price: "$1,950",
            duration: "45 Min",
            description:
              "Jet Plasma Pen is a handheld device that uses cold plasma to rejuvenate the skin, stimulate collagen, and stimulate fibroblasts deep in the dermis. Because it uses a cooler atmospheric temperature, it does not create surface trauma. The extremely powerful device penetrates 17,000 volts of plasma through the epidermis down to the dermis. This is a 4-treatment program performed every week or every two weeks.",
          },
        ],
      },
      {
        title: "Add-On Services",
        services: [
          {
            name: "BioRePeel Blue",
            price: "$95",
            duration: "10 min",
            description:
              "A medical-grade, biphasic chemical peel that exfoliates and revitalizes the skin. Its formula combines TCA, other acids, vitamins, and amino acids to remove dead skin cells while stimulating collagen and elastin production.",
          },
          {
            name: "Collagen Hand Mask",
            price: "$30",
            duration: "15 min",
            description:
              "A sheet-style “glove” mask for hands, infused with hydrolyzed collagen (from marine sources) plus humectants, plant extracts, and skin-softening agents.",
          },
          {
            name: "Dermaplaning",
            price: "$75",
            duration: "25 min",
            description:
              "Gently removes dead skin and peach fuzz for smooth, glowing skin. Perfect for a brighter complexion and flawless makeup application.",
          },
          {
            name: "Hydrocell Neck Treatment",
            price: "$30",
            duration: "15 min",
            description:
              "A bio-cellulose neck mask made from coconut fiber, designed to hydrate, firm, and smooth delicate neck skin.",
          },
          {
            name: "Manual Lymphatic Massage",
            price: "$75",
            duration: "20 min",
            description:
              "A gentle facial massage that reduces puffiness, boosts circulation, and leaves your skin refreshed, glowing, and naturally contoured.",
          },
          {
            name: "Silver Repairing Microcurrent Mask",
            price: "$90",
            duration: "20 min",
            description:
              "The patented Dermotechnology Silver Mask is an advanced microcurrent treatment accessory designed to enhance skin rejuvenation and facial sculpting results. Infused with conductive silver technology, the mask helps deliver synchronized microcurrents evenly across the skin to stimulate facial muscles, boost circulation, and support collagen and elastin production. It works synergistically with the Dermotechnology system to improve firmness, tone, hydration, and overall radiance while promoting deeper absorption of active ingredients. The treatment is completely non-invasive, comfortable, and requires no downtime.",
          },
        ],
      },
    ],
  },
  {
    slug: "body",
    name: "Body",
    menuLabel: "Body",
    tagline: "Contouring & lymphatic drainage",
    caption:
      "Body Contouring & Lymphatic Drainages: Advanced, non-invasive technology to tone and shape.",
    heroDescription:
      "Advanced, non-invasive body contouring and Brazilian lymphatic drainage to tone, sculpt, and refresh — enhanced with Celluma LED, cavitation, radio frequency, and cupping technology.",
    metaTitle: "Body Contouring & Brazilian Lymphatic Drainage | Skin 360",
    metaDescription:
      "Body sculpting at Skin 360: Brazilian Lymphatic Drainage, cavitation, radio frequency, Delfín cupping therapy, Orbix micro-vibration sculpting, and Body Skin Workout in Toluca Lake & Valencia, CA.",
    groups: [
      {
        services: [
          {
            name: "Brazilian Lymphatic Drainage",
            price: "$195",
            duration: "55 Min",
            description:
              "A specialized massage technique that stimulates the lymphatic system to promote detoxification, reduce fluid retention, and improve circulation. This treatment sculpts and tones the body, relieves swelling, and supports overall wellness — leaving you feeling lighter, energized, and rejuvenated. We add Celluma body-contouring LED to boost cellular activity and enhance sculpting results, helping the body recover, rebalance, and refine more efficiently.",
          },
          {
            name: "Brazilian Lymphatic Drainage — Body / Face",
            price: "$245",
            duration: "75 Min",
            description:
              "A full-body and facial lymphatic treatment that promotes detoxification, reduces swelling, and enhances circulation. Helps sculpt and tone while supporting a refreshed, rejuvenated appearance from head to toe. We add Celluma body-contouring LED to boost cellular activity and enhance sculpting results.",
          },
          {
            name: "Brazilian Lymphatic Drainage with Cavitation",
            price: "$295",
            duration: "80 Min",
            description:
              "A powerful body-sculpting fusion of ultrasonic cavitation and lymphatic drainage. Helps break down stubborn fat, enhance circulation, reduce swelling, and support natural detoxification — leaving the body visibly smoother, lighter, and more defined. We add Celluma body-contouring LED to enhance sculpting results.",
          },
          {
            name: "Brazilian Lymphatic Drainage with Radio Frequency",
            price: "$295",
            duration: "80 Min",
            description:
              "A sculpting and rejuvenating treatment that combines Brazilian manual lymphatic drainage with advanced radio frequency technology. Radio frequency gently heats the deeper layers of the skin, stimulating collagen production, tightening loose areas, and improving overall skin texture. Together, these two powerful modalities help define your silhouette, support post-procedure recovery, reduce water retention, and leave your skin looking smoother, firmer, and more radiant. Enhanced with Celluma body-contouring LED.",
          },
          {
            name: "Delfín Sculpting Therapy: Per-Area Treatments",
            price: "$175",
            duration: "35 min",
            description:
              "Whether it's your stomach, arms, legs, or a butt lift, each area in cupping therapy gets its own focused treatment designed to sculpt, smooth, and tighten. Stomach: contour the waistline, reduce bloating, and mobilize stubborn fat to flatten the midsection. Arms: tighten loose skin, improve tone, and reduce the look of “bat wings.” Legs: break up cellulite, improve circulation, and sculpt the leg shape. Butt-Lift: lift, round, and firm the glutes using vacuum suction to mobilize fat, stimulate circulation, and activate the underlying tissue.",
          },
          {
            name: "Lymphatic Drainage with Delfín Therapy Cupping",
            price: "$250",
            duration: "60 Min",
            description:
              "A specialized body treatment that combines gentle suction therapy with targeted lymphatic stimulation to boost circulation, encourage detoxification, and reduce fluid retention. This technique relieves muscle tension, minimizes inflammation, and enhances skin tone while sculpting and toning the body. The result is a lighter, more energized, deeply relaxed state of wellness — leaving you refreshed, rejuvenated, and restored.",
          },
          {
            name: "Orbix Micro-Vibration Sculpting",
            price: "$275",
            duration: "60 min",
            description:
              "The Orbix Reshaping System is a powerful, professional treatment for body contouring, cellulite reduction, and facial rejuvenation. Using compression micro-vibration and Red LED therapy, it boosts circulation, stimulates lymphatic drainage, breaks down fat deposits, and increases collagen for smoother, firmer skin. Orbix effectively treats the thighs, buttocks, abdomen, arms, back, legs, and delicate facial areas for lifting and tightening. Its deep-tissue massage effect also makes it an excellent post-workout recovery treatment, helping reduce soreness, flush lactic acid, and leave the body feeling lighter and more energized.",
          },
          {
            name: "Body Skin Workout",
            price: "$250",
            duration: "40 min",
            description:
              "Transform your skin from the body up with the Body Skin Workout. Using advanced microcurrent technology and electroporation, this non-invasive treatment helps improve skin firmness, smooth texture, reduce the appearance of cellulite, and enhance overall skin health — no downtime required. To personalize your results, we'll select the ideal treatment serum based on your goals from our Hot Fat Burner Serum, Hot Slimming Serum, or Cool Draining Serum.",
          },
          {
            name: "Jet Plasma Pen",
            price: "$2,400",
            duration: "45 Min",
            description:
              "Jet Plasma Pen is a handheld device that uses cold plasma to rejuvenate the skin, stimulate collagen, and stimulate fibroblasts deep in the dermis. Because it uses a cooler atmospheric temperature, it does not create surface trauma. The extremely powerful device penetrates 17,000 volts of plasma through the epidermis down to the dermis. This is a 4-treatment program performed every week or every two weeks.",
          },
        ],
      },
      {
        title: "Add-On Option",
        services: [
          {
            name: "BioRePeel Gold",
            price: "$115",
            duration: "per area",
            description:
              "Reveal smoother, brighter, and more even skin from head to toe. This advanced body peel targets texture, discoloration, congestion, and dullness while delivering deep hydration and collagen support. Perfect for areas like the back, arms, stomach, chest, legs, and booty.",
          },
        ],
      },
    ],
  },
  {
    slug: "scalp",
    name: "Scalp — Head Spa",
    menuLabel: "Scalp — Head Spa",
    tagline: "Japanese Head Spa experience",
    caption:
      "Head Spa Experience: An exclusive luxurious treatment designed to restore scalp health, stress relief, and overall wellbeing.",
    heroDescription:
      "An exclusive, luxurious Japanese Head Spa designed to restore scalp health, relieve stress, and support overall wellbeing — with scalp analysis, detox, oxygen therapy, CryoScalp, and LED light therapy.",
    metaTitle: "Japanese Head Spa & Scalp Treatments | Skin 360 Valencia",
    metaDescription:
      "Experience Skin 360's Japanese Head Spa: Signature, Detox, and Luxury scalp treatments, gentleman's scalp care, hair extension headspa, red laser hair therapy, and blow-dry services in Valencia & Toluca Lake, CA.",
    groups: [
      {
        intro:
          "Each Head Spa includes an automatic full-body massage and aromatherapy. Note: we dry the hair without styling to prevent damage; styling can be added for an additional fee.",
        services: [
          {
            name: "Japanese Signature Scalp Treatment",
            price: "$160",
            duration: "60 Min",
            description:
              "This treatment begins with an in-depth scalp analysis using a high-resolution camera to assess scalp health and concerns, followed by a high-frequency comb to stimulate circulation, reduce irritation, and prep the scalp. Next, you'll be guided to our luxurious spa bed with a gentle, fully adjustable automatic massage feature to help you unwind completely. A deep cleanse and detox scrub remove buildup and excess oil, leading into a soothing head massage using both manual and electric modalities. The treatment continues with an Oxygen Spray for hydration and finishes with a side-by-side scalp analysis to reveal visible improvements, plus a gentle blow-dry.",
            note: "Includes an automatic full-body massage and aromatherapy.",
          },
          {
            name: "Japanese Detox Scalp Treatment",
            price: "$210",
            duration: "75 Min",
            description:
              "Everything in our Signature treatment, elevated. Scalp analysis and high-frequency comb prep, deep cleanse and detoxifying scrub, and a soothing head massage using various electric and manual modalities. A nourishing scalp mask with steam therapy opens the pores and infuses hydration and nutrients while you enjoy an arm, hand, and shoulder massage. We finish with an Oxygen Spray, our CryoScalp cooling tool to soothe and refresh the roots, red LED light to support healthier, fuller-looking hair, and a final scalp analysis to show your results.",
            note: "Includes an automatic full-body massage and aromatherapy.",
          },
          {
            name: "Skin 360 Luxury Scalp Experience",
            price: "$275",
            duration: "90 Min",
            description:
              "This is where we do everything — the full Skin 360 Japanese Head Spa experience for complete relaxation. Includes everything from our Detox Scalp Treatment: deep cleansing/detoxifying scrub, scalp mask with steam therapy, arm-hand-shoulder massage, oxygen spray, CryoScalp, and LED light. In addition, enjoy an extra 15 minutes of detoxifying facial lymphatic drainage, topped with a hydrating serum and a blissful hydrojelly mask. The ultimate self-care combo: Face, Body, Scalp.",
            note: "Includes an automatic full-body massage and aromatherapy.",
          },
          {
            name: "Japanese Gentleman Scalp Treatment",
            price: "$185",
            duration: "60 Min",
            description:
              "The Japanese Gentleman Scalp Treatment begins with a detailed scalp analysis, followed by targeted beard conditioning to soften hair and nourish the skin. A relaxing facial lymphatic massage reduces tension and puffiness, and a soothing hydrojelly mask calms and hydrates the skin. This treatment is fully tailored for all clients, including bald heads, offering a refreshing, balanced, and revitalizing grooming experience.",
            note: "Includes an automatic full-body massage and aromatherapy.",
          },
          {
            name: "Hair Extension Tailored Japanese Headspa",
            price: "$255",
            duration: "90 Min",
            description:
              "An extension-focused headspa supporting both scalp health and extension longevity, delivering hydration and repair. Ideal for chlorine exposure, salt-water dryness, vacation hair recovery, sun-damage prevention, dry or tangled extensions, and scalp buildup. Includes in-depth scalp analysis, deep cleanse and detox scrub, a soothing head massage, Oxygen Spray for deep hydration, a side-by-side scalp analysis, and a gentle blow-dry to ensure scalp and extensions are fully dry.",
            note: "Includes an automatic full-body massage and aromatherapy.",
          },
        ],
      },
      {
        title: "Hair Loss & Growth Therapy Add-On",
        services: [
          {
            name: "Red Laser Scalp Therapy",
            price: "$125",
            duration: "30 Min",
            description:
              "Our advanced low-level laser therapy uses medical-grade red light to gently stimulate the scalp, improve circulation, and support healthier, fuller-looking hair. This non-invasive treatment helps reduce shedding and strengthen weakened follicles — with no pain and no downtime.",
          },
          {
            name: "Healthy Scalp & Fight Hair Loss Treatment",
            price: "$190",
            duration: "30 Min",
            description:
              "A workout for your scalp! This treatment uses a microcurrent tool along with a special scalp serum to support a healthy scalp, improve circulation, and help fight hair loss by creating a better environment for stronger, healthier-looking hair.",
          },
        ],
      },
      {
        title: "Hair Services Add-On",
        services: [
          {
            name: "Blow Dry & Style",
            price: "$60",
            duration: "20 Min",
            description:
              "A smooth, polished blow-dry with a full blowout and finished styling — sleek, voluminous, or softly curled — for a refined, ready-to-go look.",
          },
          {
            name: "Blow Dry with Hot Tool",
            price: "$75",
            duration: "30 Min",
            description:
              "A polished blow-dry with hot-tool finish: a smooth blowout followed by curling iron or flat-iron styling for long-lasting shape, movement, or sleek definition.",
          },
          {
            name: "Hair Extension Move-Up / Install / Re-Install / Removal",
            price: "$50+",
            description:
              "The move-up, removal, and re-install process refreshes your extensions by safely taking them out, cleaning the area, and placing them back in for comfortable, seamless wear. Each service protects your natural hair while restoring extension placement and longevity.",
            note: "For personalized guidance, please contact us for a free consultation.",
          },
        ],
      },
    ],
  },
  {
    slug: "nails",
    name: "Nails",
    menuLabel: "Nails",
    tagline: "Manicures, pedicures & combos",
    caption:
      "Nails: Clean, detailed manicures and pedicures — classic, gel, and Russian — plus spa combos.",
    heroDescription:
      "Clean, detailed nail care — from Classic and Gel to the ultra-precise Russian manicure and full nail sets — plus pampering mani/pedi spa combos.",
    metaTitle: "Manicures, Pedicures & Russian Nails | Skin 360",
    metaDescription:
      "Nail services at Skin 360: Classic, Gel, and Russian manicures & pedicures, full nail sets, fills, and Skin 360 mani/pedi spa combos with paraffin, scrub, and massage in Toluca Lake & Valencia, CA.",
    groups: [
      {
        services: [
          {
            name: "Classic Manicure or Pedicure",
            price: "$30",
            description:
              "Clean shaping, fresh cuticles, a little glow, and your favorite regular polish to finish it off. Includes a 5-minute massage.",
          },
          {
            name: "Russian Manicure or Pedicure",
            price: "$70",
            description:
              "A dry, e-file technique that creates the cleanest, most detailed nail prep possible. The cuticle area is gently lifted and refined with specialized e-file bits, allowing polish to sit flawlessly close to the skin for a “grown-from-the-cuticle” look. Nails are shaped with precision and the surface is smoothed for a sleek, long-lasting, ultra-clean finish that makes every color look elevated. Includes a 5-minute massage.",
          },
          {
            name: "Gel Manicure or Pedicure",
            price: "$40",
            description:
              "Gives you that ultra-glossy, long-lasting shine. Nails are shaped, cuticles are detailed, and each layer of gel is cured for a smooth, chip-resistant finish that stays flawless for weeks. Includes a 5-minute massage.",
          },
          {
            name: "Full Nail Set",
            price: "$75",
            description:
              "A complete nail transformation — length, shape, structure, and style all customized to you. Extensions are built using hard gel, gel-x, or builder gel to create your ideal length and silhouette. Nails are sculpted and refined to perfection.",
          },
          {
            name: "Nail Fills",
            price: "$60",
            description:
              "Refresh your existing set by removing lifted product, rebalancing the structure, and filling in new growth. The old apex is refined, the shape is restored, and the nails are rebuilt to look smooth, strong, and freshly done again.",
          },
        ],
      },
      {
        title: "Skin 360 Spa Combos",
        services: [
          {
            name: "Skin 360 Classic Mani/Pedi Combo",
            price: "$125",
            description:
              "Enjoy a full pampering experience with our mani + pedi spa combo, featuring a smoothing scrub, softening callus remover, and deeply hydrating paraffin wax for hands and feet. The service ends with a relaxing 15-minute massage. Saves you $30.",
          },
          {
            name: "Skin 360 Russian Mani/Pedi Combo",
            price: "$185",
            description:
              "Featuring precise e-file cuticle work, a smoothing scrub, softening callus remover, and deeply hydrating paraffin wax for hands and feet. Finished with a relaxing 15-minute massage — a flawless, pampering upgrade from fingers to toes. Saves you $53.",
          },
          {
            name: "Skin 360 Gel Mani/Pedi Combo",
            price: "$148",
            description:
              "Enhanced long-lasting gel shine for hands and feet. Enjoy a smoothing scrub, softening callus remover, and deeply hydrating paraffin wax for ultimate softness. Finishes with a relaxing 15-minute massage — a glossy, pampering upgrade from fingers to toes. Saves you $30.",
          },
        ],
      },
      {
        title: "Add-On Services",
        services: [
          {
            name: "Paraffin Wax w/ Warm Mitts",
            price: "$12",
            description:
              "The ultimate hydration boost for dry, tired hands. Warm, melted paraffin is brushed or dipped onto the skin, sealing in moisture and soothing stiffness. Hands are then wrapped in cozy heated mitts so the warmth deeply penetrates and softens the skin.",
          },
          {
            name: "Scrub",
            price: "$10",
            description:
              "Gently buffs away dry, dull skin to reveal a softer, smoother glow. A luxe exfoliating blend is massaged into the hands, lifting dead skin and boosting circulation while leaving the skin silky and refreshed.",
          },
          {
            name: "Callus Remover",
            price: "$12",
            description:
              "Softens and smooths rough, hardened skin to leave feet feeling fresh and renewed. A professional-strength softening solution is applied to targeted areas, breaking down tough calluses safely and gently.",
          },
          {
            name: "10 Minute Massage",
            price: "$15",
            description:
              "Melt away tension and elevate your mani or pedi into a true self-care moment. Warm lotion or oil is worked into the hands, arms, feet, or calves using soothing, rhythmic techniques that relax muscles and boost circulation.",
          },
          {
            name: "Nail Design (per nail)",
            price: "$3+",
            description:
              "Adds creative detail to your set with custom art, accents, or patterns. From minimal lines to bold statement looks, each design is crafted with precision to elevate your manicure.",
          },
          {
            name: "French Tip w/ Service",
            price: "$10",
            description:
              "Crisp white tips painted with precision, creating that iconic, fresh-from-the-salon finish.",
          },
        ],
      },
    ],
  },
  {
    slug: "post-cosmetic-surgery",
    name: "Post-Cosmetic Surgery",
    menuLabel: "Post-Cosmetic Surgery",
    tagline: "Recovery lymphatic drainage",
    caption:
      "Post-Cosmetic Surgery: Brazilian lymphatic drainage to speed recovery and reduce swelling and bruising.",
    heroDescription:
      "Brazilian manual lymphatic drainage crafted to accelerate healing, reduce pain, bruising, and swelling, and enhance your cosmetic surgery results — helping reveal your new look sooner.",
    metaTitle: "Post-Cosmetic Surgery Lymphatic Drainage | Skin 360",
    metaDescription:
      "Post-op recovery care at Skin 360: Brazilian manual lymphatic drainage for body and face to reduce swelling, bruising, and pain after cosmetic surgery. Available in Toluca Lake & Valencia, CA. Package savings available.",
    groups: [
      {
        services: [
          {
            name: "Post Cosmetic Surgery — Body",
            price: "$245",
            duration: "60 Min",
            description:
              "Our Brazilian manual lymphatic drainage treatment, carefully crafted to accelerate healing, reduce pain, bruising, and swelling, and enhance your cosmetic surgery results. This specialized technique supports a smoother recovery and helps reveal your new silhouette more quickly.",
          },
          {
            name: "Post Cosmetic Surgery — Face",
            price: "$170",
            duration: "45 Min",
            description:
              "Brazilian facial lymphatic drainage, crafted to gently speed recovery, ease discomfort, and diminish swelling and bruising after cosmetic procedures. Our refined method helps reveal your rejuvenated look more quickly and naturally.",
          },
          {
            name: "Post Cosmetic Surgery — Body / Face",
            price: "$345",
            duration: "100 Min",
            description:
              "Brazilian manual lymphatic drainage for both the body and face — carefully crafted to accelerate healing, reduce pain, bruising, and swelling, and boost your cosmetic surgery results. Our specialized technique supports a smoother recovery and helps you enjoy your refreshed look even sooner.",
          },
        ],
      },
    ],
  },
];

export function getCategory(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

/** Post-cosmetic surgery package note, surfaced on that category page. */
export const POST_SURGERY_PACKAGE_NOTE =
  "Packages available: enjoy 15% off when you purchase a series of 10 sessions. Full payment is required at the time of purchase.";
