"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "高速パフォーマンス",
    description:
      "最新の技術スタックを採用し、高速で快適なユーザー体験を提供します。",
  },
  {
    icon: Shield,
    title: "セキュリティ",
    description:
      "エンタープライズグレードのセキュリティで、お客様のデータを保護します。",
  },
  {
    icon: Clock,
    title: "24時間サポート",
    description:
      "専門スタッフが24時間体制でお客様をサポートいたします。",
  },
  {
    icon: Users,
    title: "チーム連携",
    description:
      "複数人での共同作業を効率的に行える機能を提供しています。",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            選ばれる理由
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            私たちのサービスが多くのお客様に選ばれている理由をご紹介します。
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg"
              variants={item}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
