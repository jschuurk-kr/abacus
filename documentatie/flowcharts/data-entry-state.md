# Data entry state

This document describes the states a data entry can have.
The transition labels describe the endpoint that is used for performing the transition.
The "save" endpoint, used to for [First/Second]EntryInProgress states is kept out, because Mermaid doesn't render self-loops too well.

```mermaid
stateDiagram
FirstEntryNotStarted --> FirstEntryInProgress: claim
#FirstEntryInProgress --> FirstEntryInProgress: claim
#FirstEntryInProgress --> FirstEntryInProgress: save
FirstEntryInProgress --> SecondEntryNotStarted: finalise
FirstEntryInProgress --> FirstEntryNotStarted: delete
SecondEntryNotStarted --> SecondEntryInProgress: claim
#SecondEntryInProgress --> SecondEntryInProgress: claim
#SecondEntryInProgress --> SecondEntryInProgress: save
state is_equal <<choice>>
is_equal --> Definitive: equal? yes
is_equal --> EntriesDifferent: equal? no
SecondEntryInProgress --> is_equal: finalise
SecondEntryInProgress --> SecondEntryNotStarted: delete
#EntriesDifferent --> EntriesDifferent: save
# Will be Implemented in #130: EntriesDifferent --> NotStarted: delete
EntriesDifferent --> Definitive: resolve
```
