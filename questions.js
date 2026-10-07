const QUESTION_BANK = [
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.1 Laptop Hardware",
    "question": "Which laptop storage upgrade is commonly smaller than a 2.5-inch SATA SSD and connects directly to the motherboard?",
    "options": [
      "M.2 SSD",
      "3.5-inch HDD",
      "Optical disc",
      "DIMM"
    ],
    "answer": 0,
    "explanations": [
      "M.2 SSDs are compact storage devices that can connect directly to a motherboard.",
      "A 3.5-inch HDD is a larger desktop-style magnetic drive.",
      "An optical disc is removable media, not the compact internal upgrade described.",
      "A DIMM is system memory, not storage."
    ],
    "tip": "M.2 = small motherboard-mounted storage."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.1 Laptop Hardware",
    "question": "What is a common laptop battery replacement consideration?",
    "options": [
      "Battery type and connector must match",
      "Any battery will fit",
      "The battery must be an HDD",
      "A CMOS battery powers the laptop normally"
    ],
    "answer": 0,
    "explanations": [
      "Laptop batteries vary by model, chemistry, size, and connector.",
      "Laptop batteries are not universally interchangeable.",
      "An HDD is storage, not a battery.",
      "A CMOS battery maintains firmware settings; it does not normally power the laptop."
    ],
    "tip": "Laptop battery replacements must match the device."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.2 Connecting Mobile Devices",
    "question": "Which connector is reversible and commonly used for modern mobile devices?",
    "options": [
      "USB-C",
      "USB-A",
      "DB-9",
      "RJ11"
    ],
    "answer": 0,
    "explanations": [
      "USB-C is reversible and is widely used for charging, data, and other signals.",
      "USB-A has a traditional one-way rectangular plug.",
      "DB-9 is associated with serial connections.",
      "RJ11 is commonly associated with telephone connections."
    ],
    "tip": "USB-C is reversible."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.2 Connecting Mobile Devices",
    "question": "What is tethering?",
    "options": [
      "Using a phone to provide network access to another device",
      "Connecting a printer with USB",
      "Replacing a laptop battery",
      "Encrypting an SSD"
    ],
    "answer": 0,
    "explanations": [
      "Tethering shares a phone's network connection with another device.",
      "A USB printer connection is not tethering.",
      "Battery replacement is hardware maintenance.",
      "Storage encryption is a security function."
    ],
    "tip": "Tethering = share the phone's connection."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.3 Mobile Device Networks",
    "question": "What does a mobile hotspot do?",
    "options": [
      "Shares a cellular connection over Wi-Fi",
      "Turns Bluetooth into NFC",
      "Disables cellular data permanently",
      "Replaces a SIM with RAM"
    ],
    "answer": 0,
    "explanations": [
      "A hotspot allows other devices to use a phone's cellular connection through Wi-Fi.",
      "Bluetooth and NFC are separate wireless technologies.",
      "A hotspot uses cellular data rather than permanently disabling it.",
      "SIMs identify/connect a cellular subscriber; RAM is memory."
    ],
    "tip": "Hotspot = cellular Internet shared over Wi-Fi."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.3 Mobile Device Networks",
    "question": "Which technology is designed for very short-range contactless communication and payments?",
    "options": [
      "NFC",
      "LTE",
      "Ethernet",
      "SATA"
    ],
    "answer": 0,
    "explanations": [
      "NFC is short-range wireless technology commonly used for contactless payments.",
      "LTE is cellular networking over much larger distances.",
      "Ethernet is wired networking.",
      "SATA is a storage interface."
    ],
    "tip": "NFC = tap/very short range."
  },
  {
    "domain": "1.0 Mobile Devices",
    "topic": "1.3 Mobile Device Management",
    "question": "What is a key purpose of MDM?",
    "options": [
      "Centrally manage mobile-device policies and settings",
      "Increase CPU clock speed",
      "Convert SATA to NVMe",
      "Replace a cracked display"
    ],
    "answer": 0,
    "explanations": [
      "Mobile Device Management centrally applies policies, apps, restrictions, and other controls.",
      "MDM is management software, not CPU tuning.",
      "MDM does not convert storage interfaces.",
      "MDM cannot physically repair a display."
    ],
    "tip": "MDM = centralized mobile management."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.1 Introduction to IP",
    "question": "Which transport protocol is connection-oriented and provides reliable delivery?",
    "options": [
      "TCP",
      "UDP",
      "ARP",
      "ICMP only"
    ],
    "answer": 0,
    "explanations": [
      "TCP establishes a connection and provides reliable, ordered delivery.",
      "UDP is connectionless and has less delivery overhead.",
      "ARP resolves local IP addresses to MAC addresses; it is not a transport protocol.",
      "ICMP is used for network control/diagnostic messaging, not reliable application transport."
    ],
    "tip": "TCP = reliable and connection-oriented."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.1 Common Ports",
    "question": "Which port is used by HTTPS?",
    "options": [
      "443",
      "80",
      "25",
      "3389"
    ],
    "answer": 0,
    "explanations": [
      "HTTPS commonly uses TCP port 443.",
      "Port 80 is HTTP.",
      "Port 25 is SMTP.",
      "Port 3389 is RDP."
    ],
    "tip": "HTTPS = 443."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.1 Common Ports",
    "question": "Which port is commonly used by SSH?",
    "options": [
      "22",
      "23",
      "53",
      "110"
    ],
    "answer": 0,
    "explanations": [
      "SSH commonly uses TCP port 22.",
      "Port 23 is Telnet.",
      "Port 53 is DNS.",
      "Port 110 is POP3."
    ],
    "tip": "SSH = 22."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.1 Common Ports",
    "question": "Which service commonly uses port 53?",
    "options": [
      "DNS",
      "RDP",
      "SMTP",
      "IMAP"
    ],
    "answer": 0,
    "explanations": [
      "DNS commonly uses port 53.",
      "RDP commonly uses 3389.",
      "SMTP commonly uses 25.",
      "IMAP commonly uses 143."
    ],
    "tip": "DNS = 53."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.1 Common Ports",
    "question": "Which port is commonly associated with Remote Desktop Protocol?",
    "options": [
      "3389",
      "445",
      "143",
      "67"
    ],
    "answer": 0,
    "explanations": [
      "RDP commonly uses TCP/UDP port 3389.",
      "445 is commonly SMB.",
      "143 is IMAP.",
      "67 is used by DHCP servers."
    ],
    "tip": "RDP = 3389."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.2 Wireless Network Technologies",
    "question": "Which Wi-Fi band generally has longer range but more interference than 5 GHz?",
    "options": [
      "2.4 GHz",
      "60 GHz",
      "Infrared",
      "NFC"
    ],
    "answer": 0,
    "explanations": [
      "2.4 GHz generally travels farther and is widely used, but it is often more crowded.",
      "60 GHz has much shorter range and different characteristics.",
      "Infrared is not the Wi-Fi band described.",
      "NFC is very short-range communication."
    ],
    "tip": "2.4 GHz = longer range, often more interference."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.3 Network Services",
    "question": "What is the primary job of DHCP?",
    "options": [
      "Automatically assign IP configuration",
      "Translate names to IP addresses",
      "Encrypt web traffic",
      "Print documents"
    ],
    "answer": 0,
    "explanations": [
      "DHCP automatically provides IP configuration such as an address, mask, gateway, and DNS information.",
      "DNS translates names and IP addresses.",
      "HTTPS/TLS is used for encrypted web traffic.",
      "Printing is unrelated to DHCP."
    ],
    "tip": "DHCP = automatic IP configuration."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.4 DNS Configuration",
    "question": "Which DNS record maps a hostname to an IPv4 address?",
    "options": [
      "A",
      "AAAA",
      "MX",
      "CNAME only"
    ],
    "answer": 0,
    "explanations": [
      "An A record maps a name to an IPv4 address.",
      "AAAA maps a name to an IPv6 address.",
      "MX identifies mail servers.",
      "CNAME creates an alias to another canonical name."
    ],
    "tip": "A = IPv4 address record."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.4 DNS Configuration",
    "question": "Which DNS record identifies a mail server for a domain?",
    "options": [
      "MX",
      "TXT",
      "PTR",
      "AAAA"
    ],
    "answer": 0,
    "explanations": [
      "MX records identify mail exchangers for a domain.",
      "TXT stores text information and is often used for verification/security policies.",
      "PTR is commonly used for reverse lookups.",
      "AAAA maps names to IPv6 addresses."
    ],
    "tip": "MX = mail exchanger."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.4 DHCP",
    "question": "What is a DHCP reservation used for?",
    "options": [
      "Give a device the same IP based on its MAC address",
      "Block all wireless traffic",
      "Convert IPv4 to a hostname",
      "Encrypt DNS records"
    ],
    "answer": 0,
    "explanations": [
      "A reservation associates a device's MAC address with a consistent DHCP-provided IP address.",
      "Wireless blocking is an access/security function.",
      "DNS handles name resolution.",
      "A reservation does not encrypt DNS."
    ],
    "tip": "Reservation = predictable DHCP address for a device."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.4 VLANs and VPNs",
    "question": "What is the main purpose of a VLAN?",
    "options": [
      "Logically separate broadcast domains",
      "Increase monitor resolution",
      "Repair corrupted files",
      "Provide battery backup"
    ],
    "answer": 0,
    "explanations": [
      "A VLAN logically separates devices into different broadcast domains on switching infrastructure.",
      "Display resolution is unrelated.",
      "File repair is an operating-system task.",
      "A UPS provides battery backup."
    ],
    "tip": "VLAN = logical network separation."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.4 VLANs and VPNs",
    "question": "What does a VPN provide?",
    "options": [
      "An encrypted tunnel across another network",
      "A physical RAM upgrade",
      "A printer maintenance cycle",
      "A replacement DNS server by definition"
    ],
    "answer": 0,
    "explanations": [
      "A VPN creates an encrypted connection/tunnel over another network such as the Internet.",
      "VPNs are software/network functions, not RAM upgrades.",
      "Printer maintenance is unrelated.",
      "A VPN does not inherently replace DNS."
    ],
    "tip": "VPN = encrypted tunnel."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.5 Network Devices",
    "question": "Which device forwards traffic between different IP networks?",
    "options": [
      "Router",
      "Patch panel",
      "Hub only",
      "Punch-down tool"
    ],
    "answer": 0,
    "explanations": [
      "A router forwards packets between IP networks.",
      "A patch panel provides cable termination/organization.",
      "A hub repeats traffic within a local segment and does not route IP networks.",
      "A punch-down tool terminates wires."
    ],
    "tip": "Router = connects/routes between networks."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.5 Network Devices",
    "question": "Which device primarily forwards Ethernet frames using MAC addresses?",
    "options": [
      "Switch",
      "Modem",
      "UPS",
      "KVM"
    ],
    "answer": 0,
    "explanations": [
      "A switch learns MAC addresses and forwards Ethernet frames to appropriate ports.",
      "A modem provides connectivity across certain service types.",
      "A UPS provides power protection.",
      "A KVM controls multiple computers with shared keyboard/video/mouse."
    ],
    "tip": "Switch = MAC-address frame forwarding."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.6 IPv4 and IPv6",
    "question": "How many bits are in an IPv4 address?",
    "options": [
      "32",
      "48",
      "64",
      "128"
    ],
    "answer": 0,
    "explanations": [
      "IPv4 addresses are 32 bits long.",
      "48 bits is commonly associated with MAC address length, not IPv4.",
      "64 bits is not the full IPv4 or IPv6 address length.",
      "IPv6 addresses are 128 bits."
    ],
    "tip": "IPv4 = 32 bits; IPv6 = 128 bits."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.6 Assigning IP Addresses",
    "question": "Which IPv4 range is commonly used for APIPA when DHCP is unavailable?",
    "options": [
      "169.254.0.0/16",
      "127.0.0.0/8",
      "10.0.0.0/8 only",
      "224.0.0.0/4"
    ],
    "answer": 0,
    "explanations": [
      "APIPA uses the 169.254.0.0/16 link-local range.",
      "127.0.0.0/8 is loopback.",
      "10.0.0.0/8 is private addressing but not APIPA.",
      "224.0.0.0/4 is multicast space."
    ],
    "tip": "169.254.x.x usually points to DHCP trouble."
  },
  {
    "domain": "2.0 Networking",
    "topic": "2.8 Network Tools",
    "question": "Which tool attaches an RJ45 connector to twisted-pair cable?",
    "options": [
      "Crimper",
      "Loopback plug",
      "Tone generator only",
      "Wi-Fi analyzer"
    ],
    "answer": 0,
    "explanations": [
      "A crimper secures modular connectors such as RJ45 to cable.",
      "A loopback plug tests interfaces.",
      "A tone generator helps trace cables.",
      "A Wi-Fi analyzer evaluates wireless conditions."
    ],
    "tip": "Crimper = attach modular connector."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.1 Display Types",
    "question": "Which display technology uses organic material that emits light and does not require a traditional backlight?",
    "options": [
      "OLED",
      "LCD with CCFL",
      "TN only",
      "CRT"
    ],
    "answer": 0,
    "explanations": [
      "OLED pixels emit their own light.",
      "Traditional LCD panels require a backlight such as CCFL or LED.",
      "TN is an LCD panel technology and still uses a backlight.",
      "CRT uses an electron-beam tube."
    ],
    "tip": "OLED = self-emissive pixels."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.1 Display Attributes",
    "question": "What does refresh rate measure?",
    "options": [
      "How many times per second the image is refreshed",
      "Number of pixels in an image",
      "Amount of RAM in the GPU",
      "Cable length"
    ],
    "answer": 0,
    "explanations": [
      "Refresh rate is measured in hertz and describes image updates per second.",
      "Pixel count describes resolution.",
      "GPU memory is separate from refresh rate.",
      "Cable length is unrelated."
    ],
    "tip": "Refresh rate = Hz."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.2 Network Cables",
    "question": "Which twisted-pair connector is commonly used for Ethernet?",
    "options": [
      "RJ45",
      "RJ11",
      "F-connector",
      "LC"
    ],
    "answer": 0,
    "explanations": [
      "RJ45 is commonly used with twisted-pair Ethernet cabling.",
      "RJ11 is commonly used for telephone connections.",
      "F-connectors are common with coaxial cable.",
      "LC is a fiber connector."
    ],
    "tip": "Ethernet twisted pair \u2192 RJ45."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.2 Optical Fiber",
    "question": "Which fiber type is commonly used for very long distances?",
    "options": [
      "Single-mode fiber",
      "Multimode only",
      "Coaxial cable",
      "UTP Cat 5 only"
    ],
    "answer": 0,
    "explanations": [
      "Single-mode fiber uses a small core and is suited for long-distance links.",
      "Multimode fiber is typically used for shorter fiber runs.",
      "Coax is copper, not optical fiber.",
      "UTP Cat 5 is copper twisted pair."
    ],
    "tip": "Single-mode = long-distance fiber."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.2 Peripheral Cables",
    "question": "Which USB connector is reversible?",
    "options": [
      "USB-C",
      "USB-A",
      "USB-B",
      "Mini-B"
    ],
    "answer": 0,
    "explanations": [
      "USB-C can be inserted in either orientation.",
      "USB-A has a fixed orientation.",
      "USB-B has a fixed orientation.",
      "Mini-B has a fixed orientation."
    ],
    "tip": "USB-C = reversible connector."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.2 Video Cables",
    "question": "Which interface can carry digital video and audio and is common on TVs and monitors?",
    "options": [
      "HDMI",
      "VGA",
      "RJ11",
      "Molex"
    ],
    "answer": 0,
    "explanations": [
      "HDMI carries digital audio and video.",
      "VGA is analog video and does not normally carry audio.",
      "RJ11 is a telephone connector.",
      "Molex is a power connector."
    ],
    "tip": "HDMI = digital audio + video."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.2 Storage Cables",
    "question": "Which interface commonly connects internal 2.5-inch and 3.5-inch SATA drives?",
    "options": [
      "SATA",
      "HDMI",
      "RJ45",
      "Lightning"
    ],
    "answer": 0,
    "explanations": [
      "SATA is used for many internal storage drives.",
      "HDMI is audio/video.",
      "RJ45 is Ethernet.",
      "Lightning is an Apple mobile-device connector."
    ],
    "tip": "SATA = common internal drive interface."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.3 Memory",
    "question": "What happens to data in normal DRAM when power is removed?",
    "options": [
      "It is lost",
      "It is permanently retained",
      "It moves to the CPU automatically",
      "It becomes firmware"
    ],
    "answer": 0,
    "explanations": [
      "DRAM is volatile memory, so its contents disappear when power is removed.",
      "Persistent retention describes nonvolatile storage.",
      "Data does not automatically become CPU storage.",
      "Firmware is stored in nonvolatile memory."
    ],
    "tip": "RAM is volatile."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.3 Memory",
    "question": "Which memory module form factor is commonly used in laptops?",
    "options": [
      "SO-DIMM",
      "Full-size DIMM only",
      "M.2",
      "SATA"
    ],
    "answer": 0,
    "explanations": [
      "SO-DIMMs are compact memory modules commonly used in laptops.",
      "Full-size DIMMs are common in desktops.",
      "M.2 is commonly used for storage and some other expansion devices.",
      "SATA is a storage interface."
    ],
    "tip": "SO-DIMM = laptop RAM."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.4 Storage Devices",
    "question": "Which storage device has no moving mechanical parts?",
    "options": [
      "SSD",
      "HDD",
      "Optical disc drive",
      "Tape drive"
    ],
    "answer": 0,
    "explanations": [
      "An SSD stores data electronically and has no moving mechanical parts.",
      "An HDD uses spinning platters and moving heads.",
      "Optical drives spin discs.",
      "Tape drives mechanically move tape."
    ],
    "tip": "SSD = no moving parts."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.4 RAID",
    "question": "Which RAID level mirrors data between drives?",
    "options": [
      "RAID 1",
      "RAID 0",
      "RAID 5",
      "RAID 10 only"
    ],
    "answer": 0,
    "explanations": [
      "RAID 1 uses mirroring to duplicate data.",
      "RAID 0 uses striping without redundancy.",
      "RAID 5 uses striping with distributed parity.",
      "RAID 10 combines mirroring and striping, but RAID 1 is the direct mirroring answer."
    ],
    "tip": "RAID 1 = mirror."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.4 RAID",
    "question": "Which RAID level provides striping with no redundancy?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    "answer": 0,
    "explanations": [
      "RAID 0 stripes data for performance but has no fault tolerance.",
      "RAID 1 mirrors data.",
      "RAID 5 uses distributed parity.",
      "RAID 6 uses double parity."
    ],
    "tip": "RAID 0 = speed, no redundancy."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 Motherboard Expansion Slots",
    "question": "Which modern expansion interface is commonly used for graphics cards?",
    "options": [
      "PCI Express",
      "ISA",
      "RJ45",
      "SATA power"
    ],
    "answer": 0,
    "explanations": [
      "PCI Express is the modern high-speed expansion bus commonly used by graphics cards.",
      "ISA is a legacy expansion bus.",
      "RJ45 is a network connector.",
      "SATA power supplies storage devices and is not an expansion slot."
    ],
    "tip": "GPU expansion \u2192 PCIe."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 BIOS Settings",
    "question": "What does Secure Boot help prevent?",
    "options": [
      "Unauthorized boot software from loading",
      "RAM from losing data",
      "A printer from jamming",
      "Wi-Fi interference"
    ],
    "answer": 0,
    "explanations": [
      "Secure Boot validates trusted boot components and helps block unauthorized boot software.",
      "RAM volatility is unrelated.",
      "Printer jams are mechanical.",
      "Wi-Fi interference is radio-related."
    ],
    "tip": "Secure Boot protects the boot process."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 HSM and TPM",
    "question": "What is a common TPM use?",
    "options": [
      "Securely store cryptographic information/keys",
      "Increase display refresh rate",
      "Route IP packets",
      "Clean a laser printer drum"
    ],
    "answer": 0,
    "explanations": [
      "A TPM is a hardware security component used for cryptographic functions and protected key storage.",
      "Refresh rate is a display property.",
      "Routers forward packets.",
      "Printer cleaning is maintenance."
    ],
    "tip": "TPM = hardware-backed security."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 CPU Features",
    "question": "Which CPU feature allows one physical processor package to contain multiple processing cores?",
    "options": [
      "Multi-core",
      "NFC",
      "RAID",
      "DHCP"
    ],
    "answer": 0,
    "explanations": [
      "Multi-core CPUs contain multiple processing cores in one processor package.",
      "NFC is wireless communication.",
      "RAID combines storage drives.",
      "DHCP assigns IP configuration."
    ],
    "tip": "Multi-core = multiple CPU cores."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 Expansion Cards",
    "question": "Which expansion card provides wired Ethernet connectivity?",
    "options": [
      "NIC",
      "Sound card",
      "Capture card",
      "Video card"
    ],
    "answer": 0,
    "explanations": [
      "A network interface card provides network connectivity such as Ethernet.",
      "A sound card handles audio.",
      "A capture card records external audio/video sources.",
      "A video card renders graphics."
    ],
    "tip": "NIC = network interface."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.5 Cooling",
    "question": "Why is thermal paste applied between a CPU and heat sink?",
    "options": [
      "Improve heat transfer between surfaces",
      "Provide electrical power",
      "Store BIOS settings",
      "Increase disk capacity"
    ],
    "answer": 0,
    "explanations": [
      "Thermal compound fills microscopic gaps and improves heat transfer.",
      "It does not provide electrical power.",
      "BIOS settings are stored in firmware/related configuration memory.",
      "It does not affect storage capacity."
    ],
    "tip": "Thermal paste improves heat transfer."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.6 Computer Power",
    "question": "What unit measures electrical power?",
    "options": [
      "Watts",
      "Volts per second",
      "Ohms only",
      "Hertz"
    ],
    "answer": 0,
    "explanations": [
      "Watts measure electrical power.",
      "Voltage measures electrical potential, not power by itself.",
      "Ohms measure resistance.",
      "Hertz measure frequency."
    ],
    "tip": "Power = watts."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.7 Multifunction Devices",
    "question": "What should usually be installed for a printer to communicate correctly with the operating system?",
    "options": [
      "Correct printer driver",
      "A second CPU",
      "A VPN concentrator",
      "A RAID controller"
    ],
    "answer": 0,
    "explanations": [
      "The correct printer driver allows the OS to use the printer's capabilities.",
      "A second CPU is unrelated.",
      "A VPN concentrator handles VPN connections.",
      "A RAID controller manages storage arrays."
    ],
    "tip": "Printer problem? Verify the driver."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.8 Laser Printer Maintenance",
    "question": "Which laser-printer component bonds toner to paper using heat and pressure?",
    "options": [
      "Fuser",
      "Pickup roller",
      "Transfer roller only",
      "Duplexer"
    ],
    "answer": 0,
    "explanations": [
      "The fuser uses heat and pressure to permanently bond toner to paper.",
      "Pickup rollers move paper.",
      "Transfer components help move toner to paper before fusing.",
      "A duplexer enables two-sided printing."
    ],
    "tip": "Fuser = heat + pressure."
  },
  {
    "domain": "3.0 Hardware",
    "topic": "3.8 Inkjet Printers",
    "question": "What is a common inkjet maintenance task for poor print quality?",
    "options": [
      "Clean the print heads",
      "Replace the fuser",
      "Replace the laser drum",
      "Install a RAID controller"
    ],
    "answer": 0,
    "explanations": [
      "Clogged inkjet nozzles can cause poor output, so print-head cleaning is a common maintenance step.",
      "Fusers are laser-printer components.",
      "Laser drums belong to laser printing.",
      "RAID controllers are unrelated to printers."
    ],
    "tip": "Inkjet streaks/gaps \u2192 consider print-head cleaning."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "topic": "4.1 Virtualization Concepts",
    "question": "What is a virtual machine?",
    "options": [
      "A software-defined computer running a guest OS",
      "A physical Ethernet cable",
      "A printer queue",
      "A DNS record"
    ],
    "answer": 0,
    "explanations": [
      "A VM emulates a computer environment so a guest operating system can run on virtualized hardware.",
      "Ethernet cable is physical networking media.",
      "A printer queue manages print jobs.",
      "A DNS record stores name-service data."
    ],
    "tip": "VM = computer in software."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "topic": "4.1 Virtualization Services",
    "question": "Which hypervisor type runs directly on hardware?",
    "options": [
      "Type 1",
      "Type 2 only",
      "SaaS",
      "VPN"
    ],
    "answer": 0,
    "explanations": [
      "A Type 1 or bare-metal hypervisor runs directly on physical hardware.",
      "A Type 2 hypervisor runs on top of a host operating system.",
      "SaaS is a cloud service model.",
      "VPN is a networking technology."
    ],
    "tip": "Type 1 = bare metal."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "topic": "4.1 Virtualization Services",
    "question": "What is a snapshot useful for?",
    "options": [
      "Returning a VM to a previous state",
      "Increasing cable bandwidth",
      "Replacing a failed PSU",
      "Assigning a DNS MX record"
    ],
    "answer": 0,
    "explanations": [
      "A VM snapshot captures a point-in-time state that can be restored.",
      "Snapshots do not change physical cable bandwidth.",
      "They do not replace power supplies.",
      "They do not configure DNS mail records."
    ],
    "tip": "Snapshot = point-in-time VM state."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "topic": "4.2 Cloud Models",
    "question": "Which cloud model provides complete applications to end users over the network?",
    "options": [
      "SaaS",
      "IaaS",
      "PaaS",
      "RAID"
    ],
    "answer": 0,
    "explanations": [
      "Software as a Service delivers applications to users.",
      "Infrastructure as a Service provides virtualized infrastructure.",
      "Platform as a Service provides an application-development/deployment platform.",
      "RAID is storage redundancy/performance technology."
    ],
    "tip": "SaaS = use the application."
  },
  {
    "domain": "4.0 Virtualization and Cloud Computing",
    "topic": "4.2 Cloud Characteristics",
    "question": "Which cloud characteristic allows resources to grow or shrink as demand changes?",
    "options": [
      "Rapid elasticity",
      "Static addressing",
      "Port mirroring",
      "Thermal throttling"
    ],
    "answer": 0,
    "explanations": [
      "Rapid elasticity describes dynamically scaling cloud resources.",
      "Static addressing is IP configuration.",
      "Port mirroring copies network traffic for analysis.",
      "Thermal throttling reduces hardware performance because of heat."
    ],
    "tip": "Cloud elasticity = scale with demand."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.1 Troubleshooting Hardware",
    "question": "A PC powers off during heavy use and feels very hot. What should be checked first among these choices?",
    "options": [
      "Cooling system and airflow",
      "DNS MX record",
      "Printer toner",
      "NFC settings"
    ],
    "answer": 0,
    "explanations": [
      "Overheating commonly points to blocked airflow, failed fans, dust, or heat-sink problems.",
      "DNS records do not cause CPU overheating.",
      "Printer toner is unrelated.",
      "NFC is unrelated to desktop cooling."
    ],
    "tip": "Heat + shutdowns \u2192 check cooling."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.1 Troubleshooting Hardware",
    "question": "A desktop has no power at all. Which component should be checked as part of power troubleshooting?",
    "options": [
      "Power supply and power connections",
      "DNS server only",
      "Printer driver",
      "Bluetooth pairing"
    ],
    "answer": 0,
    "explanations": [
      "The PSU, wall power, switches, and power connections are central to a no-power symptom.",
      "DNS affects name resolution, not whether the PC powers on.",
      "Printer drivers are unrelated.",
      "Bluetooth pairing is unrelated."
    ],
    "tip": "No power \u2192 start with the power path."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.2 Troubleshooting Storage Devices",
    "question": "A hard drive makes repeated clicking noises. What should you suspect?",
    "options": [
      "Mechanical drive failure",
      "Normal SSD behavior",
      "DNS failure",
      "Incorrect monitor resolution"
    ],
    "answer": 0,
    "explanations": [
      "Clicking from an HDD can indicate a mechanical problem and possible impending failure.",
      "SSDs have no moving heads/platters and should not make HDD clicking sounds.",
      "DNS does not create drive noises.",
      "Display resolution is unrelated."
    ],
    "tip": "Clicking HDD \u2192 protect data and investigate failure."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.2 Troubleshooting Storage Devices",
    "question": "A new drive is not shown in the operating system. Which check is appropriate?",
    "options": [
      "Verify power/data connections and disk configuration",
      "Replace the monitor",
      "Change the Wi-Fi SSID",
      "Clean the printer fuser"
    ],
    "answer": 0,
    "explanations": [
      "A missing drive can result from power/data connections, firmware detection, or disk configuration.",
      "The monitor does not determine drive detection.",
      "Wi-Fi SSID is unrelated.",
      "Printer maintenance is unrelated."
    ],
    "tip": "Missing drive \u2192 check connection, firmware, and disk setup."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.3 Troubleshooting Display Issues",
    "question": "A laptop screen is extremely dim but an image is faintly visible. Which area is most likely involved?",
    "options": [
      "Backlight system",
      "DHCP scope",
      "RAID parity",
      "Printer pickup roller"
    ],
    "answer": 0,
    "explanations": [
      "A faint image with very low brightness points toward a backlight-related display problem.",
      "DHCP assigns network settings.",
      "RAID parity is storage-related.",
      "Pickup rollers move printer paper."
    ],
    "tip": "Faint image = think backlight."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.4 Troubleshooting Mobile Devices",
    "question": "A phone battery is swollen. What should you do?",
    "options": [
      "Stop using the device and handle the battery as a safety hazard",
      "Puncture it to release pressure",
      "Keep charging it overnight",
      "Freeze the phone"
    ],
    "answer": 0,
    "explanations": [
      "A swollen lithium battery is a safety hazard and the device should be taken out of service for proper handling/replacement.",
      "Puncturing a lithium battery can cause fire or injury.",
      "Continuing to charge a swollen battery increases risk.",
      "Freezing is not a safe repair method."
    ],
    "tip": "Swollen battery = stop using it."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.4 Troubleshooting Mobile Devices",
    "question": "A phone does not charge. Which simple physical check should be performed?",
    "options": [
      "Inspect the cable, connector, and charging port",
      "Change the DNS MX record",
      "Replace the CPU",
      "Enable RAID 0"
    ],
    "answer": 0,
    "explanations": [
      "Charging failures can be caused by damaged cables/connectors or debris/damage in the port.",
      "DNS mail records do not control charging.",
      "Phone CPUs are not the first physical charging check.",
      "RAID is unrelated."
    ],
    "tip": "No charge \u2192 inspect cable/connector/port."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.5 Troubleshooting Networks",
    "question": "A Windows device has a 169.254.x.x address and cannot reach the network. What is a likely cause?",
    "options": [
      "It could not obtain an address from DHCP",
      "HTTPS is using port 443",
      "The display backlight failed",
      "The printer is out of toner"
    ],
    "answer": 0,
    "explanations": [
      "A 169.254.x.x APIPA address commonly appears when normal DHCP configuration is unavailable.",
      "HTTPS port usage does not explain APIPA.",
      "A backlight problem is unrelated to IP addressing.",
      "Printer toner is unrelated."
    ],
    "tip": "169.254.x.x \u2192 check DHCP/connectivity."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.5 Troubleshooting Networks",
    "question": "What symptom can result from a duplicate IP address?",
    "options": [
      "Intermittent or failed network connectivity",
      "Higher CPU clock speed",
      "Better Wi-Fi range",
      "Cleaner printer output"
    ],
    "answer": 0,
    "explanations": [
      "Two devices using the same IP can create address conflicts and connectivity problems.",
      "IP conflicts do not increase CPU speed.",
      "They do not improve radio range.",
      "They do not affect print cleanliness."
    ],
    "tip": "Duplicate IPs cause conflicts."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.5 Troubleshooting Networks",
    "question": "Which wireless issue can be improved by changing channels or access-point placement?",
    "options": [
      "Interference",
      "RAID failure",
      "Fuser failure",
      "Swollen battery"
    ],
    "answer": 0,
    "explanations": [
      "Wireless interference can be reduced by better channel selection, placement, and identifying competing signals.",
      "RAID is storage.",
      "A fuser is a laser-printer component.",
      "A swollen battery is a mobile hardware safety problem."
    ],
    "tip": "Wi-Fi trouble \u2192 check interference and placement."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.6 Troubleshooting Printers",
    "question": "Multiple print jobs are stuck in the queue. Which software service may need attention in Windows?",
    "options": [
      "Print Spooler",
      "DHCP Client only",
      "BitLocker",
      "Hyper-V hypervisor"
    ],
    "answer": 0,
    "explanations": [
      "The Print Spooler manages queued Windows print jobs and may need to be restarted/troubleshot.",
      "DHCP handles IP configuration.",
      "BitLocker encrypts storage.",
      "Hyper-V provides virtualization."
    ],
    "tip": "Stuck print queue \u2192 check Print Spooler."
  },
  {
    "domain": "5.0 Hardware and Network Troubleshooting",
    "topic": "5.6 Troubleshooting Printers",
    "question": "A laser printer produces repeated marks at regular intervals. What should you consider?",
    "options": [
      "A rotating printer component such as the drum",
      "A DNS CNAME record",
      "A laptop touchpad setting",
      "A VPN tunnel"
    ],
    "answer": 0,
    "explanations": [
      "Repeated defects at regular spacing can point to a damaged/dirty rotating printer component.",
      "DNS aliases do not create physical print defects.",
      "Touchpad settings are unrelated.",
      "VPNs are unrelated."
    ],
    "tip": "Repeating print defect = inspect rotating components."
  }
];