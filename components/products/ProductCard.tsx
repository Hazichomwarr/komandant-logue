import { WHATSAPP_NUMBER } from "@/lib/constants/contact";
import type { Product } from "@/lib/data/products";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

function getWhatsappHref(productName: string) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  const message = `Bonjour, je suis intéressé par ${productName}. Pouvez-vous me donner plus d’informations ?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-stone-950/4 transition duration-300 hover:-translate-y-1 hover:border-[#b78a54]/35 hover:shadow-2xl hover:shadow-stone-950/8">
      <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 44vw, 22vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 inline-flex w-fit rounded-full bg-[#f7f4ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9b7444]">
          {product.category}
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-stone-950">
          {product.name}
        </h3>
        <p className="mt-4 text-sm leading-6 text-stone-600">
          {product.description}
        </p>

        <ul className="mt-6 space-y-3">
          {product.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 text-sm font-medium text-stone-700"
            >
              <Check
                className="h-4 w-4 shrink-0 text-[#9b7444]"
                strokeWidth={2}
              />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-400">
            Prix indicatif
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
            {formatPrice(product.price)}
          </p>
          <a
            href={getWhatsappHref(product.name)}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a54]"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.9} />
            Demander sur WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
