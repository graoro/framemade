import { notFound } from 'next/navigation'
import { CASE_STUDIES } from '@/lib/data'
import { CaseStudyContent } from './case-study-content'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((id) => ({ id }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const caseStudy = CASE_STUDIES[id]

  if (!caseStudy) {
    return { title: 'Case Study Not Found' }
  }

  return {
    title: `${caseStudy.title} – frameMade Case Study`,
    description: caseStudy.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params
  const caseStudy = CASE_STUDIES[id]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyContent caseStudy={caseStudy} />
}
