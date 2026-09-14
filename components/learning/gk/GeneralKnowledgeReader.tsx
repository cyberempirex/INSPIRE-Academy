'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  GKItem, 
  GKCategorySlug, 
  GK_CATEGORIES_LIST,
  GKDifficulty
} from '@/lib/types/general-knowledge';
import { INITIAL_GK_ITEMS } from '@/lib/data/general-knowledge-items';
import { 
  Search, 
  Filter, 
  Shuffle, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  Check, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  RefreshCw
} from 'lucide-react';

interface GeneralKnowledgeReaderProps {
  initialCategory?: GKCategorySlug;
  hideTopNav?: boolean;
}

// Deterministic pseudo-random number generator from seed
function pseudoRandom(seed: number, index: number): number {
  const x = Math.sin(seed + index * 1000) * 10000;
  return x - Math.floor(x);
}

export default function GeneralKnowledgeReader({ 
  initialCategory = 'all',
  hideTopNav = false 
}: GeneralKnowledgeReaderProps) {
  const [activeCategory, setActiveCategory] = useState<GKCategorySlug>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter] = useState<'All' | GKDifficulty>('All');
  const [viewMode, setViewMode] = useState<'all' | 'popular' | 'recent' | 'random' | 'bookmarks' | 'mixed'>('all');
  const [showExplanations, setShowExplanations] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [randomSeed, setRandomSeed] = useState<number>(1);

  // Lazy initializer to avoid synchronous setState inside an effect
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('inspire_gk_bookmarks');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // fallback
      }
    }
    return [];
  });

  const toggleBookmark = (id: string) => {
    let updated: string[];
    if (bookmarkedIds.includes(id)) {
      updated = bookmarkedIds.filter((bId) => bId !== id);
    } else {
      updated = [...bookmarkedIds, id];
    }
    setBookmarkedIds(updated);
    try {
      localStorage.setItem('inspire_gk_bookmarks', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleCopy = (item: GKItem) => {
    const textToCopy = `Q: ${item.question}\nAnswer: ${item.answer}${item.explanation ? `\nExplanation: ${item.explanation}` : ''}\n(Category: ${item.categoryLabel} - ${item.subCategoryLabel || ''})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let list = [...INITIAL_GK_ITEMS];

    // Category filter
    if (activeCategory === 'mixed-gk' || viewMode === 'mixed') {
      // Mixed GK deliberately combines all categories
      list = [...INITIAL_GK_ITEMS];
    } else if (activeCategory !== 'all') {
      list = list.filter((item) => {
        if (activeCategory === 'india') {
          return item.primaryCategory === 'india' || item.categoryLabel.toLowerCase().includes('india') || item.subCategoryLabel?.toLowerCase().includes('india');
        }
        if (activeCategory === 'assam-northeast') {
          return item.primaryCategory === 'assam-northeast' || item.categoryLabel.toLowerCase().includes('assam');
        }
        if (activeCategory === 'science') {
          return item.primaryCategory === 'science' || item.primaryCategory === 'space' || item.primaryCategory === 'computers';
        }
        return item.primaryCategory === activeCategory;
      });
    }

    // Difficulty filter
    if (difficultyFilter !== 'All') {
      list = list.filter((item) => item.difficulty === difficultyFilter);
    }

    // View mode filters
    if (viewMode === 'popular') {
      list = list.filter((item) => item.isPopular);
    } else if (viewMode === 'bookmarks') {
      list = list.filter((item) => bookmarkedIds.includes(item.id));
    } else if (viewMode === 'recent') {
      list.sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime());
    } else if (viewMode === 'random' || activeCategory === 'mixed-gk') {
      // Deterministic shuffle with randomSeed
      list = [...list].sort((a, b) => {
        const indexA = INITIAL_GK_ITEMS.findIndex(item => item.id === a.id);
        const indexB = INITIAL_GK_ITEMS.findIndex(item => item.id === b.id);
        return pseudoRandom(randomSeed, indexA) - pseudoRandom(randomSeed, indexB);
      });
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => 
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.explanation && item.explanation.toLowerCase().includes(q)) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.subCategoryLabel && item.subCategoryLabel.toLowerCase().includes(q)) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (item.source && item.source.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, difficultyFilter, viewMode, searchQuery, bookmarkedIds, randomSeed]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Search & Control Header */}
      <div className="bg-white rounded-md border border-[#E2E8F0] p-5 sm:p-6 shadow-xs space-y-5">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search General Knowledge (e.g. Constitution, Rivers, Sukaphaa, Planets, Nobel Prize)..."
            className="w-full pl-12 pr-10 py-3.5 bg-[#FAFAF7] border border-[#E2E8F0] rounded-xs text-sm sm:text-base text-[#0B2945] placeholder:text-[#64748B]/70 focus:border-[#0B2945] focus:bg-white focus:outline-hidden font-medium transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-[#64748B] hover:text-[#0B2945] px-2 py-1 bg-white rounded-xs border border-[#E2E8F0]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Primary Discovery Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#E2E8F0]">
          
          {/* Quick Discovery Modes */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => { setViewMode('all'); setActiveCategory('all'); }}
              className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition-colors cursor-pointer border ${
                viewMode === 'all' && activeCategory !== 'mixed-gk'
                  ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                  : 'bg-[#FAFAF7] text-[#334155] border-[#E2E8F0] hover:text-[#0B2945]'
              }`}
            >
              All Facts ({INITIAL_GK_ITEMS.length})
            </button>

            <button
              onClick={() => { setViewMode('popular'); }}
              className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition-colors cursor-pointer border flex items-center gap-1.5 ${
                viewMode === 'popular'
                  ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                  : 'bg-[#FAFAF7] text-[#334155] border-[#E2E8F0] hover:text-[#0B2945]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#C62832]" />
              <span>High-Yield</span>
            </button>

            <button
              onClick={() => { setViewMode('random'); setRandomSeed(prev => prev + 7); }}
              className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition-colors cursor-pointer border flex items-center gap-1.5 ${
                viewMode === 'random'
                  ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                  : 'bg-[#FAFAF7] text-[#334155] border-[#E2E8F0] hover:text-[#0B2945]'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5 text-[#16865A]" />
              <span>Random Discover</span>
            </button>

            <button
              onClick={() => { setViewMode('bookmarks'); }}
              className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition-colors cursor-pointer border flex items-center gap-1.5 ${
                viewMode === 'bookmarks'
                  ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                  : 'bg-[#FAFAF7] text-[#334155] border-[#E2E8F0] hover:text-[#0B2945]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-[#0B2945]" />
              <span>Saved ({bookmarkedIds.length})</span>
            </button>

            <button
              onClick={() => { setViewMode('mixed'); setActiveCategory('mixed-gk'); }}
              className={`px-3 py-1.5 rounded-xs text-xs font-bold font-mono transition-colors cursor-pointer border flex items-center gap-1.5 ${
                activeCategory === 'mixed-gk' || viewMode === 'mixed'
                  ? 'bg-[#16865A] text-white border-[#16865A] shadow-xs'
                  : 'bg-[#FAFAF7] text-[#16865A] border-[#86EFAC] hover:bg-[#86EFAC]/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mixed GK</span>
            </button>
          </div>

          {/* Reading Format Switches */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExplanations(!showExplanations)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#334155] bg-[#FAFAF7] hover:bg-[#E2E8F0] rounded-xs border border-[#E2E8F0] transition-colors cursor-pointer"
              title="Toggle detailed academic explanations"
            >
              {showExplanations ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-[#64748B]" />
                  <span className="hidden sm:inline">Concise Mode</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-[#16865A]" />
                  <span className="hidden sm:inline">Show Explanations</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* In-Page Topic / Category Filters (Continuous Row) */}
        {!hideTopNav && (
          <div className="pt-3 border-t border-[#E2E8F0]">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <span className="text-[11px] font-mono text-[#64748B] uppercase font-bold mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3 text-[#0B2945]" />
                Topic:
              </span>
              {GK_CATEGORIES_LIST.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (cat.id === 'mixed-gk') {
                        setViewMode('mixed');
                      } else {
                        setViewMode('all');
                      }
                    }}
                    className={`px-3 py-1 text-xs font-semibold rounded-xs border transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#0B2945] text-white border-[#0B2945] shadow-xs'
                        : 'bg-white text-[#334155] border-[#E2E8F0] hover:text-[#0B2945] hover:border-[#0B2945]'
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Feed Status Summary */}
      <div className="flex items-center justify-between text-xs font-mono text-[#64748B] px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16865A]" />
          <span>
            Showing <strong className="text-[#0B2945]">{filteredItems.length}</strong> knowledge {filteredItems.length === 1 ? 'item' : 'items'}
          </span>
          {activeCategory !== 'all' && (
            <span className="bg-[#FAFAF7] text-[#0B2945] px-2 py-0.5 rounded-xs border border-[#E2E8F0] font-semibold">
              Category: {GK_CATEGORIES_LIST.find(c => c.id === activeCategory)?.name}
            </span>
          )}
        </div>

        {viewMode === 'random' && (
          <button
            onClick={() => setRandomSeed(prev => prev + 11)}
            className="text-xs font-mono text-[#16865A] hover:underline flex items-center gap-1 cursor-pointer font-bold"
          >
            <RefreshCw className="w-3 h-3" /> Reshuffle Feed
          </button>
        )}
      </div>

      {/* Knowledge Items Feed (Continuous Reference List) */}
      {filteredItems.length > 0 ? (
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const itemNum = index < 9 ? `0${index + 1}` : `${index + 1}`;

            return (
              <article
                key={item.id}
                id={`gk-item-${item.id}`}
                className="bg-white rounded-md border border-[#E2E8F0] p-5 sm:p-7 shadow-xs hover:border-[#0B2945]/40 transition-colors space-y-4"
              >
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between gap-3 text-xs font-mono border-b border-[#E2E8F0] pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-[#0B2945] bg-[#FAFAF7] px-2 py-0.5 rounded-xs border border-[#E2E8F0]">
                      #{itemNum}
                    </span>
                    <span className="font-semibold text-[#16865A]">
                      {item.categoryLabel} {item.subCategoryLabel && `· ${item.subCategoryLabel}`}
                    </span>
                    <span className="text-[#64748B]/40">|</span>
                    <span className="text-[#64748B] hidden sm:inline">
                      {item.difficulty} Level
                    </span>
                  </div>

                  {/* Actions (Bookmark & Copy) */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(item)}
                      title="Copy knowledge item"
                      className="p-1.5 rounded-xs text-[#64748B] hover:text-[#0B2945] hover:bg-[#FAFAF7] transition-colors cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-[#16865A]" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark for revision'}
                      className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                        isBookmarked 
                          ? 'text-[#C62832] bg-[#C62832]/10' 
                          : 'text-[#64748B] hover:text-[#0B2945] hover:bg-[#FAFAF7]'
                      }`}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 fill-current" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Statement */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2945] leading-snug">
                    {item.question}
                  </h3>
                </div>

                {/* Answer Block */}
                <div className="p-3.5 bg-[#FAFAF7] rounded-xs border-l-4 border-[#16865A] space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#16865A] block">
                    Answer:
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0B2945]">
                    {item.answer}
                  </p>
                </div>

                {/* Concise Explanation (if enabled) */}
                {showExplanations && item.explanation && (
                  <div className="pt-1 text-xs sm:text-sm text-[#334155] leading-relaxed pl-1">
                    <span className="font-semibold text-[#0B2945]">Short explanation: </span>
                    {item.explanation}
                  </div>
                )}

                {/* Footer Metadata & Tags */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#64748B]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-white border border-[#E2E8F0] rounded-xs text-[#334155]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {item.source && (
                    <span className="text-[10px] text-[#64748B] italic">
                      Source: {item.source}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Clean Empty State */
        <div className="bg-white rounded-md border border-[#E2E8F0] p-10 sm:p-14 text-center shadow-xs space-y-4">
          <div className="w-14 h-14 rounded-md bg-[#FAFAF7] border border-[#E2E8F0] flex items-center justify-center mx-auto text-[#0B2945]">
            <HelpCircle className="w-7 h-7 text-[#0B2945]/60" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#0B2945]">
              {viewMode === 'bookmarks' 
                ? 'No Bookmarked Knowledge Items Yet' 
                : 'No Knowledge Items Match Your Filter'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              {viewMode === 'bookmarks'
                ? 'Click the bookmark icon on any factual item while reading to save it here for fast revision.'
                : 'Try adjusting your search query or reset the category filter.'}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setViewMode('all');
              }}
              className="px-4 py-2 bg-[#0B2945] hover:bg-[#16865A] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}

      {/* Deliberate Mixed GK & Quiz Bridge Section */}
      <section className="bg-white rounded-md border border-[#E2E8F0] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#16865A]/10 text-[#16865A] text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mixed General Knowledge</span>
            </div>
            <h3 className="text-xl font-bold text-[#0B2945] font-display">
              Cross-Disciplinary Review &amp; Self-Testing
            </h3>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-2xl">
              Competitive examinations test rapid recall across multiple disciplines simultaneously. Practice cross-cutting facts across India, World, Science, History, and Assam.
            </p>
          </div>

          {/* Test Yourself Bridge (Secondary Quiz CTA) */}
          <Link
            href="/learning/quizzes/gk-quiz"
            className="px-5 py-3 bg-[#0B2945] hover:bg-[#16865A] text-white text-xs sm:text-sm font-bold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs shrink-0"
          >
            <span>TEST YOURSELF IN GK QUIZ</span>
            <ArrowRight className="w-4 h-4 text-[#86EFAC]" />
          </Link>
        </div>

        {/* Academic Citation Note */}
        <div className="p-3.5 bg-[#FAFAF7] rounded-xs border border-[#E2E8F0] text-[11px] font-mono text-[#334155] leading-relaxed">
          <strong>Academic Standard:</strong> Inspire Academy General Knowledge items are curated and verified against authoritative reference publications, NCERT standard foundations, and state-level examination guidelines.
        </div>
      </section>

    </div>
  );
}
