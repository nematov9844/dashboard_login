import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Ma'lumotlarni olish uchun useGet hook
export const useGet = (endpoint) => {
  const token = localStorage.getItem("token"); // Tokenni localStorage dan olish

  return useQuery({
    queryKey: [endpoint], // Endpoints nomi queryKey sifatida ishlatiladi
    queryFn: async () => {
      const response = await axios.get(`https://auth-backend-7w3u.onrender.com/${endpoint}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "", // Agar token bo'lsa, Authorization headerini yuboring
        },
      });
      return response.data; // Backenddan olingan ma'lumotlarni qaytarish
    },
    // Qo'shimcha sozlamalar, masalan, xatoliklarni qayta sinab ko'rish yoki yuklash holati
    retry: false,
    refetchOnWindowFocus: false,
  });
};
