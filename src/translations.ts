export const translations = {
  en: {
    nav: {
      destinations: "Destinations",
      experiences: "Experiences",
      pricing: "Pricing",
      about: "About",
      planTrip: "Plan My Trip"
    },
    hero: {
      badge: "Expert Concierge",
      title: "Your Personal Korea Travel Planner",
      description: "Custom-curated itineraries for families and food enthusiasts. Discover TV-featured local secrets with the precision of a scholar and the warmth of a local guide.",
      ctaPlan: "Plan My Trip",
      ctaSample: "View Sample Plans"
    },
    whyUs: {
      title: "Why Us",
      localExpertise: { title: "Local Expertise", desc: "Exclusive access to TV-featured hidden gems and spots only locals know. We guide you beyond the tourist maps." },
      familyFriendly: { title: "Family Friendly", desc: "Thoughtfully designed routes considering children and elderly family members. Low-impact, high-memory experiences." },
      seamlessBookings: { title: "Seamless Bookings", desc: "We handle the complex K-restaurant queues, hair salon appointments, and K-Pop experiences so you don't have to." }
    },
    consultation: {
      title: "Start Your Korean Journey",
      description: "Tell us about your dream trip. Our planners use these details to craft a preliminary overview of your Seoul experience.",
      accommodation: "Primary Accommodation Interest",
      travelStyle: "Travel Style Preference",
      travelOptions: ["Tourist Style (Must-sees)", "Local Style (Hidden)"],
      foodPalette: "Food Palette",
      foodOptions: ["Korean BBQ", "Street Food", "Halal/Vegan", "Fine Dining"],
      name: "Your Name",
      dates: "Expected Dates",
      family: "Family Composition",
      submit: "Submit Consultation Request"
    },
    destinations: {
      title: "Seoul Districts",
      description: "Every neighborhood tells a different story. Choose the atmosphere that suits your family's spirit.",
      mapLink: "Explore the map",
      jongno: { title: "Jongno", desc: "The traditional heart. Palaces, tea houses, and ancient alleyways frozen in time." },
      seongsu: { title: "Seongsu", desc: "The Brooklyn of Seoul. Pop-up stores and industrial-chic cafes." },
      gangnam: { title: "Gangnam", desc: "High-end luxury, skincare clinics, and the pulse of K-Pop." },
      busan: { title: "Busan", desc: "Coastal beauty, vibrant seafood markets, and stunning beachside culture." },
      mapPlaceholder: { title: "Interactive Territory View", desc: "Click to reveal the topographical layout of our specialized zones in Seoul." }
    },
    pricing: {
      title: "Planning Tiers",
      description: "From quick weekend getaways to month-long deep dives, select the tier of scholar support you need.",
      basic: {
        title: "Basic",
        subtitle: "Itinerary Recommendation",
        price: "$20",
        target: "Short trips / First-time visitors",
        features: ["1-3 Day Essential Plan", "Daily Recommended Courses", "Optimized Daily Routes", "Key Attractions & Food Recommendations", "PDF Itinerary"],
        addons: ["Restaurant Reservation (+$30)", "Market Tour Recommendation (+$10)", "Cafe List (+$5)"],
        btn: "Select Basic"
      },
      custom: {
        title: "Custom",
        subtitle: "Tailored Travel",
        price: "$35",
        target: "Korean Food / Local Experience",
        features: ["Up to 6 Days Curated Plan", "Mixed Tourist & Local Courses", "Hidden Market Tour Recommendations", "Regional Restaurant & Cafe Lists", "Travel Style Analysis-based Itinerary"],
        extraFeatures: ["Language & Culture Kit (Basic Korean, Ordering Tips, Transport Guide)", "Live KakaoMaps Linkage (Routes, Regional Maps)"],
        addons: ["Restaurant Reservation (+$30)", "Salon Booking (+$30)", "Cooking Class (+$20)", "Hanbok Experience (+$20)"],
        btn: "Select Custom"
      },
      premium: {
        title: "Premium",
        subtitle: "Travel Concierge",
        price: "$110",
        target: "Family / Long-term / VIP Travel",
        features: ["7+ Days Comprehensive Plan", "Inter-city Transport Planning (KTX/Air)", "Family-specific Itinerary", "Detailed Regional Route Design"],
        concierge: ["Itinerary Adjustments", "On-trip Inquiries"],
        priorityBooking: ["Popular Restaurants", "Beauty Shops / Salons", "Experience Programs"],
        emergency: ["24/7 Emergency Support (Itinerary Adjustments, Booking Changes)"],
        premiumFeatures: ["Hidden Local Restaurant List", "Regional Cafe Tour Courses", "Market Food Tour Design"],
        addons: ["Airport Transfer Guide (+$20)", "VIP Restaurant Reservation (+$50)", "K-pop Experience (+$30)", "Professional Photography (+$40)"],
        btn: "Select Premium"
      },
      optionalAddons: {
        title: "Optional Add-ons (All Plans)",
        items: [
          { name: "Restaurant Reservation", price: "$30" },
          { name: "Beauty / Hair Salon Booking", price: "$30" },
          { name: "Cooking Class Booking", price: "$20" },
          { name: "Hanbok Experience Booking", price: "$20" },
          { name: "Market Food Tour Planning", price: "$20" },
          { name: "Transport Route Planning", price: "$10" }
        ]
      }
    },
    testimonials: {
      title: "Voices of the Modern Traveler"
    },
    footer: {
      tagline: "Sophisticated travel consulting for the modern explorer of Korea.",
      copyright: "© 2024 Modern Scholar Travel Consulting. All rights reserved."
    },
    inquiry: {
      step: "Step {current} of {total}",
      title: "Consultation Form",
      description: "Understanding your needs helps us curate the perfect Korean journey.",
      progress: "Progress",
      saveDraft: "Save Draft",
      nav: { prev: "Previous", next: "Next Step", submit: "Submit" },
      sidebar: { title: "Your Blueprint", edit: "Edit", noteTitle: "Scholar's Note" },
      success: {
        title: "Submission Complete!",
        desc: "Thank you for your inquiry. We will review your details and get back to you shortly.",
        homeBtn: "Return to Home"
      }
    },
    form: {
      steps: ["Contact & Basic Info", "Trip Details", "Group & Accessibility", "Preferences", "Add-ons", "Legal & Payment"],
      step1: {
        title: "1. Contact & Basic Info",
        fullName: "Full Name (Primary Contact)",
        email: "Email Address",
        channels: "Preferred Contact Channels",
        channelsOpt: "Preferred Contact Channels (Optional)",
        nationality: "Nationality",
        residence: "Residence City",
        sim: "SIM/eSIM Availability in Korea",
        simOptions: { yes: "Yes", no: "No", will_buy: "Will buy in Korea" }
      },
      step2: {
        title: "2. Trip Details",
        arrivalDate: "Arrival Date (in Korea)",
        departureDate: "Departure Date (from Korea)",
        originAirport: "Origin Airport",
        arrivalKR: "Arrival Airport (KR)",
        departureKR: "Departure Airport (KR)",
        flightInfo: "Flight Information (Optional)",
        visa: "Visa/Entry Constraints (Self-reported)",
        fixedConstraints: "Fixed Constraints before departure",
        accomBooked: "Is accommodation booked?",
        accomArea: "Accommodation Area (e.g., Myeongdong, Gangnam)",
        accomType: "Accommodation Type",
        accomDetails: "Accommodation Details (Name, Address, Check-in/out)",
        cities: "Cities to Visit",
        nightsByCity: "Nights per City (Approx)",
        neighborhoodsPref: "Preferred Neighborhoods",
        neighborhoodsAvoid: "Neighborhoods to Avoid"
      },
      step3: {
        title: "3. Group & Accessibility",
        groupSize: "Total Group Size",
        groupType: "Group Type",
        roles: "Traveler Roles",
        ageBands: "Age Bands (e.g., 0-5: 1, 30-39: 2)",
        members: "Member Details",
        hasConstraints: "Do you have any mobility, health, or accessibility constraints?",
        constraints: "Constraint Types",
        medicalNotes: "Medical/Allergy/Emergency Notes",
        emergencyContacts: "Emergency Contacts",
        hasChildren: "Traveling with Children?",
        childNeeds: "Child Care Needs",
        hasElderly: "Traveling with Elderly?",
        elderNeeds: "Elderly Care Needs",
        hasPets: "Traveling with Pets?",
        petDetails: "Pet Details & Needs"
      },
      step4: {
        title: "4. Preferences",
        mustSee: "Must-See Places",
        avoid: "Places to Avoid",
        pace: "Daily Pace",
        timeWindow: "Preferred Daily Time Window",
        fixedEvents: "Fixed Events (Dates/Times)",
        transport: "Transport Preferences",
        appComfort: "Map/App Comfort Level",
        luggage: "Luggage/Equipment Level",
        budgetDaily: "Daily Budget (Approx)",
        budgetTotal: "Total Budget Range",
        budgetPriority: "Budget Priorities",
        foodLikes: "Food Preferences",
        spice: "Spice Tolerance",
        dietary: "Dietary Restrictions",
        allergy: "Allergy Notes",
        themesBasic: "Themes of Interest",
        themes: "Themes of Interest",
        outdoorWant: "Include Outdoor/Sports Activities?",
        outdoorTypes: "Outdoor Activity Types",
        outdoorDiff: "Hiking Difficulty",
        shopping: "Shopping Interests",
        nightlife: "Nightlife Preferences",
        photo: "Photography Needs",
        specialEvents: "Special Events/Anniversaries",
        langEng: "English Level",
        langKor: "Korean Level",
        langHelp: "Areas Needing Translation Help"
      },
      step5: {
        title: "5. Add-ons",
        desc: "Select any additional services you might need.",
        selected: "Selected Add-ons",
        details: "Add-on Details",
        options: {
          restaurant: "Restaurant Booking Assistance (+$30)",
          beauty: "Beauty/Hair Salon Booking (+$30)",
          guide: "Private Guide Matching (+$50)",
          airport: "Airport Transfer Arrangement (+$20)",
          photoshoot: "Photoshoot Booking (+$40)",
          car: "Car Rental Assistance (+$20)",
          tickets: "Event/Concert Tickets (+$20)",
          market: "Market Tour Recommendation (+$10)",
          cafe: "Cafe List (+$5)"
        }
      },
      step6: {
        title: "6. Legal & Payment",
        currency: "Preferred Currency",
        method: "Preferred Payment Method",
        refund: "I agree to the Refund and Cancellation Policy.",
        collectUse: "I consent to the collection and use of my personal information.",
        thirdParty: "I consent to third-party provision of information (for bookings).",
        marketing: "I consent to receiving marketing and review requests.",
        ackScope: "I understand this service provides itinerary planning, not on-site accompaniment.",
        ackPremium: "I understand the scope of Premium support (Emergency/Booking)."
      },
      common: {
        yes: "Yes",
        no: "No",
        optional: "(Optional)",
        required: "*"
      }
    },
    samplePlan: {
      title: "Sample Itineraries",
      description: "Get a glimpse of what a Modern Scholar curated journey looks like.",
      back: "Back to Home",
      plan1: {
        title: "3-Day Seoul Highlights",
        target: "First-time visitors",
        days: [
          { day: "Day 1", title: "The Royal Past", desc: "Gyeongbokgung Palace, Bukchon Hanok Village, and Insadong." },
          { day: "Day 2", title: "Modern Pulse", desc: "Gangnam styling, COEX, and a Han River evening cruise." },
          { day: "Day 3", title: "Trendy Alleys", desc: "Seongsu-dong cafe hopping and local market street food." }
        ]
      }
    }
  },
  ko: {
    nav: {
      destinations: "여행지",
      experiences: "체험",
      pricing: "가격",
      about: "소개",
      planTrip: "여행 계획하기"
    },
    hero: {
      badge: "전문 컨시어지",
      title: "나만의 한국 여행 플래너",
      description: "가족과 미식가를 위한 맞춤형 여행 일정. 학자의 정밀함과 현지 가이드의 따뜻함으로 TV에 소개된 현지 비밀 명소를 발견하세요.",
      ctaPlan: "여행 계획하기",
      ctaSample: "샘플 플랜 보기"
    },
    whyUs: {
      title: "왜 우리인가",
      localExpertise: { title: "현지 전문성", desc: "TV에 소개된 숨은 명소와 현지인만 아는 장소에 대한 독점적인 접근. 관광 지도를 넘어선 가이드를 제공합니다." },
      familyFriendly: { title: "가족 친화적", desc: "어린이와 노약자를 고려하여 세심하게 설계된 경로. 부담은 적고 추억은 가득한 경험." },
      seamlessBookings: { title: "원활한 예약", desc: "복잡한 한국 식당 대기, 미용실 예약, K-Pop 체험 등을 저희가 대신 처리해 드립니다." }
    },
    consultation: {
      title: "한국 여행 시작하기",
      description: "꿈꾸는 여행에 대해 알려주세요. 저희 플래너가 이 세부 정보를 사용하여 서울 여행의 예비 개요를 작성합니다.",
      accommodation: "선호하는 숙소 지역",
      travelStyle: "여행 스타일",
      travelOptions: ["관광객 스타일 (필수 코스)", "현지인 스타일 (숨은 명소)"],
      foodPalette: "음식 취향",
      foodOptions: ["한국식 바비큐", "길거리 음식", "할랄/비건", "파인 다이닝"],
      name: "이름",
      dates: "여행 예정일",
      family: "가족 구성",
      submit: "상담 요청 제출"
    },
    destinations: {
      title: "서울 지역",
      description: "모든 동네는 저마다의 이야기를 담고 있습니다. 가족의 분위기에 맞는 지역을 선택하세요.",
      mapLink: "지도 살펴보기",
      jongno: { title: "종로", desc: "전통의 중심지. 궁궐, 찻집, 시간이 멈춘 듯한 오래된 골목길." },
      seongsu: { title: "성수", desc: "서울의 브루클린. 팝업 스토어와 인더스트리얼 감성의 카페." },
      gangnam: { title: "강남", desc: "고급 럭셔리, 스킨케어 클리닉, 그리고 K-Pop의 중심지." },
      busan: { title: "부산", desc: "아름다운 해안가, 활기찬 해산물 시장, 그리고 멋진 해변 문화." },
      mapPlaceholder: { title: "인터랙티브 지도", desc: "클릭하여 서울의 전문 구역들에 대한 지형적 레이아웃을 확인하세요." }
    },
    pricing: {
      title: "플래닝 티어",
      description: "빠른 주말 여행부터 한 달간의 심층 여행까지, 필요한 학자 수준의 지원 티어를 선택하세요.",
      basic: {
        title: "베이직",
        subtitle: "일정 추천",
        price: "2만원",
        target: "짧은 여행 / 첫 방문 여행자",
        features: ["1-3일 핵심 여행 플랜", "날짜별 추천 관광 코스", "최적화된 일일 이동 경로", "주요 관광지 & 음식 추천", "PDF 여행 일정표 제공"],
        addons: ["레스토랑 예약 요청 (+3만원)", "시장 투어 추천 (+1만원)", "카페 리스트 (+5천원)"],
        btn: "베이직 선택"
      },
      custom: {
        title: "커스텀",
        subtitle: "맞춤 여행",
        price: "3만 5천원",
        target: "한국 음식 / 로컬 경험 여행",
        features: ["최대 6일 큐레이션 플랜", "관광 + 로컬 여행 혼합 코스", "숨은 시장 투어 추천", "지역별 맛집 & 카페 리스트", "여행 스타일 분석 기반 일정"],
        extraFeatures: ["언어 및 문화 키트 (기본 한국어 표현, 음식 주문 팁, 교통 이용 가이드)", "실시간 카카오맵 연동 (이동 경로 링크, 지역별 지도)"],
        addons: ["레스토랑 예약 (+3만원)", "미용실 예약 (+3만원)", "쿠킹 클래스 예약 (+2만원)", "한복 체험 예약 (+2만원)"],
        btn: "커스텀 선택"
      },
      premium: {
        title: "프리미엄",
        subtitle: "여행 컨시어지",
        price: "11만원",
        target: "가족 여행 / 장기 여행 / VIP 여행",
        features: ["7일 이상 종합 여행 플랜", "도시 간 이동 계획 (KTX/항공)", "가족 구성 맞춤 일정", "상세 지역 동선 설계"],
        concierge: ["여행 일정 조정", "여행 중 문의 대응"],
        priorityBooking: ["인기 레스토랑", "뷰티샵 / 미용실", "체험 프로그램"],
        emergency: ["24/7 긴급 지원 (여행 중 일정 수정, 예약 변경 도움)"],
        premiumFeatures: ["숨은 로컬 맛집 리스트", "지역별 카페 투어 코스", "시장 음식 투어 설계"],
        addons: ["공항 이동 가이드 (+2만원)", "VIP 레스토랑 예약 (+5만원)", "K-pop 체험 예약 (+3만원)", "전문 사진 촬영 예약 (+4만원)"],
        btn: "프리미엄 선택"
      },
      optionalAddons: {
        title: "추가 옵션 (모든 플랜)",
        items: [
          { name: "레스토랑 예약", price: "3만원" },
          { name: "미용실 예약", price: "3만원" },
          { name: "쿠킹 클래스 예약", price: "2만원" },
          { name: "한복 체험 예약", price: "2만원" },
          { name: "시장 음식 투어 설계", price: "2만원" },
          { name: "교통 경로 설계", price: "1만원" }
        ]
      }
    },
    testimonials: {
      title: "현대 여행자의 목소리"
    },
    footer: {
      tagline: "한국을 탐험하는 현대 여행자를 위한 세련된 여행 컨설팅.",
      copyright: "© 2024 Modern Scholar Travel Consulting. All rights reserved."
    },
    inquiry: {
      step: "{total}단계 중 {current}단계",
      title: "여행 상담 폼",
      description: "고객님의 니즈를 이해하면 완벽한 한국 여행을 큐레이팅하는 데 도움이 됩니다.",
      progress: "진행 상황",
      saveDraft: "임시 저장",
      nav: { prev: "이전", next: "다음 단계", submit: "제출하기" },
      sidebar: { title: "나만의 블루프린트", edit: "수정", noteTitle: "학자의 메모" },
      success: {
        title: "제출이 완료되었습니다!",
        desc: "문의해 주셔서 감사합니다. 내용을 검토한 후 곧 연락드리겠습니다.",
        homeBtn: "홈으로 돌아가기"
      }
    },
    form: {
      steps: ["연락처 및 기본 정보", "여행 상세 정보", "동반자 및 접근성", "여행 취향", "추가 옵션(Add-ons)", "약관 및 결제"],
      step1: {
        title: "1. 연락처 및 기본 정보",
        fullName: "대표 예약자 성함 (영문/여권 권장)",
        email: "이메일 주소",
        channels: "선호 연락 채널",
        channelsOpt: "선호 연락 채널 (선택)",
        nationality: "국적",
        residence: "거주 국가/도시",
        sim: "한국 내 SIM/eSIM 사용 여부",
        simOptions: { yes: "예", no: "아니오", will_buy: "한국에서 구매 예정" }
      },
      step2: {
        title: "2. 여행 상세 정보",
        arrivalDate: "한국 도착일",
        departureDate: "한국 출국일",
        originAirport: "출발 공항 (본국)",
        arrivalKR: "도착 공항 (한국)",
        departureKR: "출국 공항 (한국)",
        flightInfo: "항공편 정보 (선택)",
        visa: "비자/입국 관련 제약 (자가 보고)",
        fixedConstraints: "출국 전 고정 일정 제약",
        accomBooked: "숙소를 예약하셨나요?",
        accomArea: "숙소 지역 (예: 명동, 강남)",
        accomType: "숙소 타입",
        accomDetails: "숙소 상세 (이름, 주소, 체크인/아웃)",
        cities: "방문 예정 도시",
        nightsByCity: "도시별 체류 박수 (대략)",
        neighborhoodsPref: "선호하는 동네",
        neighborhoodsAvoid: "피하고 싶은 동네"
      },
      step3: {
        title: "3. 동반자 및 접근성",
        groupSize: "총 인원",
        groupType: "그룹 유형",
        roles: "여행자 역할",
        ageBands: "연령대 구성 (예: 0-5세: 1명, 30대: 2명)",
        members: "멤버별 상세",
        hasConstraints: "이동성, 건강 또는 접근성 제약이 있으신가요?",
        constraints: "제약 유형",
        medicalNotes: "의료/알레르기/응급 메모",
        emergencyContacts: "비상 연락처",
        hasChildren: "어린이를 동반하시나요?",
        childNeeds: "어린이 케어 필요 사항",
        hasElderly: "노약자를 동반하시나요?",
        elderNeeds: "노약자 케어 필요 사항",
        hasPets: "반려동물을 동반하시나요?",
        petDetails: "반려동물 상세 및 필요 사항"
      },
      step4: {
        title: "4. 여행 취향",
        mustSee: "꼭 가고 싶은 곳 (Must-See)",
        avoid: "피하고 싶은 곳",
        pace: "하루 여행 페이스",
        timeWindow: "선호하는 하루 일정 시간대",
        fixedEvents: "고정된 일정 (날짜/시간)",
        transport: "선호하는 이동 수단",
        appComfort: "지도/앱 사용 편의성",
        luggage: "짐/장비 수준",
        budgetDaily: "1일 예산 (대략)",
        budgetTotal: "총 예산 범위",
        budgetPriority: "예산 우선순위",
        foodLikes: "선호하는 음식",
        spice: "매운맛 허용도",
        dietary: "식이 제한",
        allergy: "알레르기 메모",
        themesBasic: "관심 테마",
        themes: "관심 테마",
        outdoorWant: "야외/스포츠 활동을 포함하시겠습니까?",
        outdoorTypes: "야외 활동 종류",
        outdoorDiff: "등산 난이도",
        shopping: "쇼핑 관심사",
        nightlife: "야간 활동 선호도",
        photo: "사진 촬영 니즈",
        specialEvents: "특별한 이벤트/기념일",
        langEng: "영어 구사 수준",
        langKor: "한국어 구사 수준",
        langHelp: "통역/번역 도움이 필요한 영역"
      },
      step5: {
        title: "5. 추가 옵션 (Add-ons)",
        desc: "필요한 추가 서비스를 선택해 주세요.",
        selected: "선택된 옵션",
        details: "옵션 상세 정보",
        options: {
          restaurant: "레스토랑 예약 요청 (+3만원)",
          beauty: "미용실 예약 (+3만원)",
          guide: "프라이빗 가이드 매칭 (+5만원)",
          airport: "공항 이동 가이드 (+2만원)",
          photoshoot: "전문 사진 촬영 예약 (+4만원)",
          car: "렌터카 예약 지원 (+2만원)",
          tickets: "이벤트/콘서트 티켓 예매 (+2만원)",
          market: "시장 투어 추천 (+1만원)",
          cafe: "카페 리스트 (+5천원)"
        }
      },
      step6: {
        title: "6. 약관 및 결제",
        currency: "선호 결제 통화",
        method: "선호 결제 수단",
        refund: "환불 및 취소 정책에 동의합니다.",
        collectUse: "개인정보 수집 및 이용에 동의합니다.",
        thirdParty: "제3자 정보 제공에 동의합니다 (예약 지원용).",
        marketing: "마케팅 및 후기 요청 수신에 동의합니다.",
        ackScope: "본 서비스는 일정 기획 및 가이드이며, 현장 동행이 아님을 이해합니다.",
        ackPremium: "프리미엄 지원(긴급/예약)의 범위를 이해합니다."
      },
      common: {
        yes: "예",
        no: "아니오",
        optional: "(선택)",
        required: "*"
      }
    },
    samplePlan: {
      title: "샘플 여행 일정",
      description: "모던 스칼라가 큐레이팅한 여행이 어떤 모습인지 미리 확인해 보세요.",
      back: "홈으로 돌아가기",
      plan1: {
        title: "서울 3일 핵심 코스",
        target: "첫 방문 여행자",
        days: [
          { day: "1일차", title: "왕실의 과거", desc: "경복궁, 북촌 한옥마을, 그리고 인사동 투어." },
          { day: "2일차", title: "현대의 맥박", desc: "강남 스타일링, 코엑스, 그리고 한강 야간 크루즈." },
          { day: "3일차", title: "트렌디한 골목길", desc: "성수동 카페 투어 및 현지 시장 길거리 음식 탐방." }
        ]
      }
    }
  }
};
