export function formatMessageTime(date) {
  return new Date(date).toLocaleTimeString("VN-vn", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
