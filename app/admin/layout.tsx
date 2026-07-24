import AdminAuthWrapper from '@/components/AdminAuthWrapper'

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <AdminAuthWrapper>{children}</AdminAuthWrapper>
}