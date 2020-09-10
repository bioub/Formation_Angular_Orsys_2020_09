import { UrlSegment, UrlMatchResult } from '@angular/router';

export function intIdMatcher(url: UrlSegment[]): UrlMatchResult {
  if (!url.length || !url[0].path.match(/^[1-9]\d*$/)) {
    return null;
  }

  return {
    consumed: [url[0]],
    posParams: {
      id: url[0],
    },
  };
}
