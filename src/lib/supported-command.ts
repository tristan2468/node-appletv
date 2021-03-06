export class SupportedCommand {
  constructor(public command: keyof typeof SupportedCommand.Command, public enabled: boolean, public canScrub: boolean) {}
}

export module SupportedCommand {
  export enum Command {
    Play = 'Play',
    Pause = 'Pause',
    TogglePlayPause = 'TogglePlayPause',
    EnableLanguageOption = 'EnableLanguageOption',
    DisableLanguageOption = 'DisableLanguageOption',
    Stop = 'Stop',
    SkipForward = 'SkipForward',
    SkipBackward = 'SkipBackward',
    BeginFastForward = 'BeginFastForward',
    BeginRewind = 'BeginRewind',
    ChangePlaybackRate = 'ChangePlaybackRate',
    SeekToPlaybackPosition = 'SeekToPlaybackPosition',
    NextInContext = 'NextInContext',
    PreviousInContext = 'PreviousInContext'
  }
}
