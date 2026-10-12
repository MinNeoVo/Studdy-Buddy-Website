import { SiZalo, SiDiscord } from "@icons-pack/react-simple-icons";

function ContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Nút Zalo */}
      <a
        href="https://zalo.me/0784871318"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Liên hệ qua Zalo"
        title="Liên hệ qua Zalo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0068FF] shadow-lg transition hover:scale-110"
      >
        <SiZalo size={42} />
      </a>

      {/* Nút Discord */}
      <a
        href="https://discord.gg/nSG5UgpwP"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tham gia Discord Study Buddy"
        title="Tham gia Discord Study Buddy"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#5865F2] text-white shadow-lg transition hover:scale-110"
      >
        <SiDiscord size={32} />
      </a>
    </div>
  );
}

export default ContactButtons;
